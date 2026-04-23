export default function WeatherCard({ data }) {
  if (!data || !data.weather || !data.weather.current_weather) return null

  const weather = data.weather.current_weather

  return (
    <div className="card">
      <h2>🌤️ Clima Atual em {data.city}</h2>

      <p><strong>Temperatura:</strong> {weather.temperature}°C</p>
      <p><strong>Velocidade do vento:</strong> {weather.windspeed} km/h</p>
      <p><strong>Direção do vento:</strong> {weather.winddirection}°</p>
      <p><strong>Hora da medição:</strong> {weather.time}</p>
    </div>
  )
}