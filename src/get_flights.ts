import { Flight } from "./types";

export async function getFlightsInfo() {
  const response = await fetch("./json/flights.json");
  return response.json();
}

export function getAirlines(flights: Record<string, Flight>[]) {
  const airlines = new Set<string>();
  flights.forEach((flight) => {
    airlines.add(flight.flight.carrier.caption);
  });
  return Array.from(airlines);
}
