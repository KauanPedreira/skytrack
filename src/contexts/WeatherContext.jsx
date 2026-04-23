import { createContext, useReducer } from "react"

export const WeatherContext = createContext()

const savedHistory = JSON.parse(localStorage.getItem("history")) || []

const initialState = {
  loading: false,
  data: null,
  error: null,
  history: savedHistory
}

function weatherReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null }


    case "FETCH_SUCCESS":
      const newHistory = [...state.history, action.payload]

      localStorage.setItem("history", JSON.stringify(newHistory))

      return {
        ...state,
        loading: false,
        data: action.payload,
        history: newHistory
      }

    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export function WeatherProvider({ children }) {
  const [state, dispatch] = useReducer(weatherReducer, initialState)

  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  )
}