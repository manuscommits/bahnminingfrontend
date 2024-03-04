import React from "react";
import "./style.css"
import BahnhofSelector from "./components/BahnhofSelector";
import DateTimePicker from "./components/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="centered">
        <span>Bahn Mining</span>
        <BahnhofSelector />
        <DateTimePicker />
      </div>
    </LocalizationProvider>
  );
}

export default App;
