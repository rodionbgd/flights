import { Filter, Flight } from "../types";
import { sortAsc, sortDesc, sortDuration } from "../utils";
import {
  airlinesListEl,
  changeFilterEl,
  priceFromEl,
  priceToEL
} from "../index";

const sortFlightsEl = <HTMLDivElement>document.getElementById("sort-flights");
const sortType = <HTMLInputElement>(
  sortFlightsEl.querySelector('input[type="radio"]:checked')
);

export function getFilter() {
  const checkedSelector = 'input[type="checkbox"]:checked';

  const sort = sortType.dataset.type!;

  const selectedChange = changeFilterEl.querySelectorAll(
    checkedSelector
  ) as unknown as HTMLElement[];
  const change = Array.from(selectedChange).map(
    (el) => +el.dataset.type!
  ) as number[];

  const price = [+priceFromEl.value, +priceToEL.value];

  const selectedAirlines = airlinesListEl.querySelectorAll(
    checkedSelector
  ) as unknown as HTMLElement[];
  const airlines = Array.from(selectedAirlines).map(
    (el) => el.dataset.airline
  ) as string[];

  return { sort, change, price, airlines } as Filter;
}

export function filterFlights(
  filter: Filter,
  flights: Record<string, Flight>[]
) {
  let filteredFlights = [...flights];
  let airlinesSet = new Set<string>();
  Object.entries(filter).forEach(([key, value]) => {
    switch (key) {
      case "change":
        if (value.length === 1) {
          filteredFlights = filteredFlights.filter((flight) =>
            flight.flight.legs.every(
              (leg) => leg.segments.length - 1 === value[0]
            )
          );
        }
        break;
      case "price":
        if (!(value as number[]).filter((price) => price).length) {
          break;
        }
        let [priceFrom, priceTo] = value as number[];
        if (!priceFrom) {
          priceFrom = 0;
        }
        if (!priceTo) {
          priceTo = Infinity;
        }
        filteredFlights = filteredFlights.filter(
          (flight) =>
            +flight.flight.price.total.amount >= priceFrom &&
            +flight.flight.price.total.amount <= priceTo
        );
        break;
      case "airlines":
        if (filter.airlines.length) {
          filteredFlights = filteredFlights.filter((flight) => {
            if (filter.airlines.includes(flight.flight.carrier.caption)) {
              airlinesSet.add(flight.flight.carrier.caption);
              return true;
            }
            return false;
          });
        }
        break;
      default:
        break;
    }
  });

  const selectedAirlines = Array.from(airlinesSet);
  Array.from(airlinesListEl.children).forEach((airline) => {
    if (!selectedAirlines.includes(airline.children[1].innerHTML)) {
      (airline.children[0] as HTMLInputElement).checked = false;
    } else {
      (airline.children[0] as HTMLInputElement).checked = true;
      (airline.children[0] as HTMLInputElement).disabled = false;
    }
  });
  let cb;
  switch (filter.sort) {
    case "asc":
      cb = sortAsc;
      break;
    case "desc":
      cb = sortDesc;
      break;
    case "duration":
      cb = sortDuration;
      break;
    default:
      break;
  }

  return filteredFlights.sort(cb);
}
