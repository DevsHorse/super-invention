import {configureStore} from "@reduxjs/toolkit";
import {cardsApi} from "./cards/cards.api";
import {cardsReducer} from "./cards/cards.slice";

export const store = configureStore({
  reducer: {
    [cardsApi.reducerPath]: cardsApi.reducer,
    cards: cardsReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(cardsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
