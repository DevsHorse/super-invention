import React, {useMemo} from 'react';
import Layout from "../components/Layout";
import {useGetCardsQuery} from "../store/cards/cards.api";
import Card from "../components/Card";
import {useAppSelector} from "../hooks/redux";

const HomePage = () => {
  const {favourites} = useAppSelector(state => state.cards)
  const {data: cards} = useGetCardsQuery()

  const favouriteCards = useMemo(() => {
    return cards?.filter(card => favourites.includes(card.id))
  }, [cards, favourites])

  return (
    <Layout>
      {favouriteCards?.length ? (
        <ul className="list-none grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-4">
          {favouriteCards?.map(card => (
            <Card key={card.id} card={card} />
          ))}
        </ul>
      ) : (
        <div className="flex items-center justify-center h-[300px] text-xl text-gray-400">
          Favourites cards
        </div>
      )}
    </Layout>
  );
};

export default HomePage;
