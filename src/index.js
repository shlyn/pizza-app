import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { Router } from "react-router"
import { ThemeProvider } from "styled-components"
import { createBrowserHistory } from "history"
import { Provider } from "react-redux"
import store from "./redux/index"

const theme = {
  red: "#EE4042",
  white: "#FFFFFF",
  grey: "#CAC7C7",
  darkGrey: "#4E4646",
  offWhite: "#FDEDED",
  gradient:
    "linear-gradient(to left bottom, #fdeded, #f0e3e3, #e3dada, #d7d0d0, #cac7c7);",
  fontFamily: "Karla, sans-serif"
}

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
