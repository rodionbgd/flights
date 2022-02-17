export type UidCaption = {
  uid: string;
  caption: string;
};

export type Carrier = UidCaption & { airlineCode: string };

export type PriceDescr = {
  amount: string;
  currency: string;
  currencyCode: string;
};
export type Price = {
  total: PriceDescr;
  totalFeeAndTaxes: PriceDescr;
};
export type Segment = {
  classOfServiceCode: string;
  classOfService: UidCaption;

  departureAirport: UidCaption;
  departureCity: UidCaption;
  departureDate: string;

  aircraft: UidCaption;
  travelDuration: number;

  arrivalCity: UidCaption;
  arrivalDate: string;
  arrivalAirport: UidCaption;

  flightNumber: string;
  airline: Carrier;
};

export type Leg = {
  duration: number;
  segments: Segment[];
};

export type Seat = {
  count: number;
  type: UidCaption;
};

export type Flight = {
  carrier: Carrier;
  price: Price;
  legs: Leg[];
  seats: Seat[];
};

export type FlightsSchedule = {
  result: {
    flights: Record<string, Flight>[];
  };
};

export type Filter = {
  sort: string;
  change: number[];
  price: number[];
  airlines: string[];
};
