import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const CARDS_FAV = 'cards-fv'

interface ICardsState {
  favourites: number[]
}

const initialState: ICardsState = {
  favourites: JSON.parse(localStorage.getItem(CARDS_FAV) ?? '[]')
}

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<number>) {
      state.favourites.push(action.payload)
      localStorage.setItem(CARDS_FAV, JSON.stringify(state.favourites))
    },
    removeFavourite(state, action: PayloadAction<number>) {
      state.favourites = state.favourites.filter(f => f!== action.payload)
      localStorage.setItem(CARDS_FAV, JSON.stringify(state.favourites))
    }
  }
})

export const cardsActions = cardsSlice.actions
export const cardsReducer = cardsSlice.reducer
