import "./css/style.scss";
import { configureStore } from "@reduxjs/toolkit";
import {
  airlinesSlice,
  createAirlinesList,
  createFlightsList,
  flightsSlice,
} from "./reducers";
import { getAirlines, getFlightsInfo } from "./get_flights";
import { FlightsSchedule } from "./types";
import { renderAirlines } from "./render/airlines";
import { renderFlights } from "./render/flights";

// eslint-disable-next-line
export const store = configureStore({
  reducer: {
    flights: flightsSlice.reducer,
    airlines: airlinesSlice.reducer,
  },
});

const airlinesListEl = <HTMLUListElement>(
  document.getElementById("airlines-list")
);
const flightsListEl = <HTMLUListElement>document.getElementById("flights-list");

async function init() {
  const { result } = (await getFlightsInfo()) as FlightsSchedule;
  const { flights } = result;
  const airlines = getAirlines(flights);
  store.dispatch(createFlightsList(flights));
  store.dispatch(createAirlinesList(airlines));

  renderAirlines(airlinesListEl);
  renderFlights(flightsListEl);
}

window.addEventListener("load", init);
