import { Flight } from "./types";

export function sortAsc(a: Record<string, Flight>, b: Record<string, Flight>) {
  return +a.flight.price.total.amount - +b.flight.price.total.amount;
}

export function sortDesc(a: Record<string, Flight>, b: Record<string, Flight>) {
  return +b.flight.price.total.amount - +a.flight.price.total.amount;
}

export function sortDuration(
  a: Record<string, Flight>,
  b: Record<string, Flight>
) {
  const legsA = a.flight.legs;
  const legsB = b.flight.legs;
  const durationA = legsA.reduce(
    (legTmp, legNext) => legTmp + legNext.duration,
    0
  );
  const durationB = legsB.reduce(
    (legTmp, legNext) => legTmp + legNext.duration,
    0
  );
  return durationA - durationB;
}
