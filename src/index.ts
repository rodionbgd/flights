import "./css/style.scss";
import { configureStore } from "@reduxjs/toolkit";
import {
  airlinesSlice,
  createAirlinesList,
  createFlightsList,
  editFilter,
  filterSlice,
  flightsSlice,
} from "./reducers";
import { getAirlines, getFlightsInfo } from "./get_flights";
import { FlightsSchedule } from "./types";
import { renderAirlines } from "./render/airlines";
import { renderFlights } from "./render/flights";
import { getFilter } from "./filter/filter";

// eslint-disable-next-line
export const store = configureStore({
  reducer: {
    flights: flightsSlice.reducer,
    airlines: airlinesSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export const airlinesListEl = <HTMLUListElement>(
  document.getElementById("airlines-list")
);
export const flightsListEl = <HTMLUListElement>(
  document.getElementById("flights-list")
);
export const sortFlightsEl = <HTMLDivElement>(
  document.getElementById("sort-flights")
);
export const changeFilterEl = <HTMLDivElement>(
  document.getElementById("change-filter")
);
export const priceFromEl = <HTMLInputElement>(
  document.getElementById("price-from")
);
export const priceToEL = <HTMLInputElement>document.getElementById("price-to");

function priceFilterCb() {
  if (+priceToEL.value && +priceFromEl.value > +priceToEL.value) {
    priceFromEl.value = priceToEL.value;
  }
  const price = [+priceFromEl.value, +priceToEL.value];
  store.dispatch(editFilter({ price }));
}

function addListeners() {
  sortFlightsEl.addEventListener("click", (e) => {
    const radioInput = e.target as HTMLInputElement;
    if (!radioInput.dataset.type) {
      return;
    }
    store.dispatch(editFilter({ sort: radioInput.dataset.type }));
  });

  changeFilterEl.addEventListener("click", (e) => {
    const changeInput = e.target as HTMLInputElement;
    if (changeInput.tagName.toLowerCase() !== "input") {
      return;
    }
    const selectedChange = <HTMLInputElement[]>(
      (<unknown>(
        changeFilterEl.querySelectorAll('input[type="checkbox"]:checked')
      ))
    );
    const change = Array.from(selectedChange).map((el) => +el.dataset.type!);
    store.dispatch(editFilter({ change }));
  });
  priceFromEl.addEventListener("change", priceFilterCb);
  priceToEL.addEventListener("change", priceFilterCb);
  airlinesListEl.addEventListener("click", (e) => {
    const airlineInput = e.target as HTMLInputElement;
    if (airlineInput.tagName.toLowerCase() !== "input") {
      return;
    }
    const airlineInputList = <HTMLInputElement[]>(
      (<unknown>(
        airlinesListEl.querySelectorAll('input[type="checkbox"]:checked')
      ))
    );
    const airlines = Array.from(airlineInputList).map(
      (airline) => airline.dataset.airline
    );
    store.dispatch(editFilter({ airlines }));
  });
}

async function init() {
  const { result } = (await getFlightsInfo()) as FlightsSchedule;
  const { flights } = result;
  const airlines = getAirlines(flights);

  addListeners();
  store.dispatch(createFlightsList(flights));
  store.dispatch(createAirlinesList(airlines));
  renderAirlines(airlinesListEl);

  store.subscribe(() => {
    renderFlights(flightsListEl);
  });
  const filter = getFilter();
  store.dispatch(editFilter(filter));
}

window.addEventListener("load", init);
