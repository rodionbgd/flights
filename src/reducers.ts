import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filter, Flight } from "./types";

const initialStateFlights: Record<string, Flight>[] = [];
const initialStateAirlines: string[] = [];
const initialStateFilter = {} as Filter;

export const flightsSlice = createSlice({
  name: "flights",
  initialState: initialStateFlights,
  reducers: {
    createFlightsList: {
      reducer: (state, action: PayloadAction<Record<string, Flight>[]>) => {
        Object.values(action.payload).forEach((value) => {
          state.push(value);
        });
      },
      prepare: (value) => ({
        payload: { ...value },
      }),
    },
  },
});

export const airlinesSlice = createSlice({
  name: "airlines",
  initialState: initialStateAirlines,
  reducers: {
    createAirlinesList: {
      reducer: (state, action: PayloadAction<string[]>) => {
        Object.values(action.payload).forEach((value) => {
          state.push(value);
        });
      },
      prepare: (value) => ({
        payload: { ...value },
      }),
    },
  },
});

export const filterSlice = createSlice({
  name: "filter",
  initialState: initialStateFilter,
  reducers: {
    editFilter: {
      reducer: (state, action: PayloadAction<Partial<Filter>>) => ({
        ...state,
        ...action.payload,
      }),
      prepare: (value) => ({
        payload: { ...value },
      }),
    },
  },
});

const { actions } = flightsSlice;
export const { createFlightsList } = actions;

const airlinesActions = airlinesSlice.actions;
export const { createAirlinesList } = airlinesActions;

const filterActions = filterSlice.actions;
export const { editFilter } = filterActions;
