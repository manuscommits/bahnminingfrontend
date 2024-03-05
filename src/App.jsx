import React from "react"
import "./style.css"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import Verbindungssuche from "./components/Verbindungssuche"
import { ThemeProvider, createTheme } from "@mui/material"
import Header from "./components/Header"
import store from './redux/store'

import { Provider } from 'react-redux'
const App = () => {
  const theme = createTheme({
    palette: {
      db: {
        main: '#EC0016',
        light: '#F75056',
        dark: '#C50014 ',
        contrastText: 'white',
      },
    },
  })

  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <div className="centered">
            <Header />
            <Verbindungssuche />
          </div>
        </ThemeProvider>
      </LocalizationProvider>
    </Provider>
  );
}

export default App;
