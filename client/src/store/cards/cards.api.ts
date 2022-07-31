import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ICard, ICardNew, IGetCardsServerResponse} from "../../models/models";


export const cardsApi = createApi({
  reducerPath: 'cards/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api'
  }),
  endpoints: build => ({
    getCards: build.query<ICard[], void>({
      query: () => '/cards',
      transformResponse: (response: IGetCardsServerResponse): ICard[] => response.data,
    }),
    removeCard: build.mutation<any, number>({
      query: (id: number) => ({
        url: `/cards/${id}`,
        method: 'DELETE'
      })
    }),
    createCard: build.mutation<IGetCardsServerResponse, ICardNew>({
      query: (card: ICardNew) => ({
        url: `/cards`,
        method: 'POST',
        headers: { "Content-Type": 'application/json' },
        body: JSON.stringify(card)
      })
    })
  })
})

export const {
  useGetCardsQuery,
  useLazyGetCardsQuery,
  useRemoveCardMutation,
  useCreateCardMutation
} = cardsApi
