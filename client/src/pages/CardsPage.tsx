import React, {useEffect} from 'react'
import {useLazyGetCardsQuery, useRemoveCardMutation} from "../store/cards/cards.api"
import Layout from "../components/Layout"
import Card from "../components/Card";

const CardsPage = () => {
  const [getCards, {data: cards}] = useLazyGetCardsQuery()
  const [removeCard] = useRemoveCardMutation()

  useEffect(() => {
    getCards()
  }, [])

  const removeCardHandler = (id: number): void => {
    removeCard(id).then(() => getCards())
  }

  return (
    <Layout>
      <ul className="list-none grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-4">
        {cards?.map(card => (
          <Card key={card.id} card={card} onRemove={removeCardHandler} />
        ))}
      </ul>
    </Layout>
  );
};

export default CardsPage;
