import { useContext } from "react"
import { WeatherContext } from "../contexts/WeatherContext"

import SearchForm from "./SearchForm"
import WeatherCard from "./WeatherCard"
import Loading from "./Loading"
import ErrorMessage from "./ErrorMessage"
import History from "./History"

import "./App.css"

function App() {
  const { state } = useContext(WeatherContext)

  return (
    <div className="container">
      <h1>SkyTrack</h1>

      <SearchForm />

      {state.loading && <Loading />}

      {state.error && <ErrorMessage message={state.error} />}

      {state.data && <WeatherCard data={state.data} />}

      <History />
    </div>
  )
}

export default App