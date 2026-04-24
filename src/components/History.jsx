import { useContext } from "react"
import { WeatherContext } from "../contexts/WeatherContext"

export default function History() {
  const { state } = useContext(WeatherContext)

  return (
    <div className="card history">
      <h3>Histórico</h3>
      <ul>
        {state.history.map((item, index) => {
          if (!item.weather || !item.weather.current_weather) {
            return null
          }

          return (
            <li key={index}>
              {item.city} - {item.weather.current_weather.temperature}°C
            </li>
          )
        })}
      </ul>
    </div>
  )
}