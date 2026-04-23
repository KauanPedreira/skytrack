import { useForm } from "react-hook-form"
import { useContext } from "react"
import { WeatherContext } from "../contexts/WeatherContext"

export default function SearchForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const { dispatch } = useContext(WeatherContext)

  const onSubmit = async (data) => {
    dispatch({ type: "FETCH_START" })

    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${data.city}`
      )
      const geoData = await geoRes.json()

      if (!geoData.results) {
        throw new Error("Cidade não encontrada")
      }

      const { latitude, longitude } = geoData.results[0]

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      )

      const weatherData = await weatherRes.json()

      dispatch({ type: "FETCH_SUCCESS", payload: { city: data.city, weather: weatherData}})

      reset()

    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Digite a cidade"
        {...register("city", { required: "Cidade é obrigatória" })}
      />

      {errors.city && <p style={{ color: "red" }}>{errors.city.message}</p>}

      <button type="submit">Buscar</button>
    </form>
  )
}