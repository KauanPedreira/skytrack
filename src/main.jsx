import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./components/App.jsx"
import { WeatherProvider } from "./contexts/WeatherContext.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </StrictMode>
)