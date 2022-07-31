import React, {useState} from 'react';
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import {TbSwords} from "react-icons/tb";
import {MdDeleteForever, MdOutlineHealthAndSafety} from "react-icons/md";
import {useAppSelector} from "../hooks/redux";
import {useActions} from "../hooks/actions";
import {ICard} from "../models/models";

interface ICardProps {
  card: ICard,
  onRemove?: (id: number) => void
}

const Card = ({card, onRemove, ...props}: ICardProps) => {
  const {favourites} = useAppSelector(state => state.cards)
  const {addFavourite, removeFavourite} = useActions()
  const [isFavourite, setIsFavourite] = useState<boolean>(favourites.includes(card.id))

  const handleFavourite = (): void => {
    if (isFavourite)
      removeFavourite(card.id)
    else
      addFavourite(card.id)
    setIsFavourite(!isFavourite)
  }

  return (
    <li
      {...props}
      className="
        group relative p-4 border-[1px] border-gray-300 rounded shadow
        drop-shadow-sm flex flex-col justify-between hover:shadow-lg hover:scale-[1.01]"
    >
      <p className="flex justify-between items-center font-bold text-lg">
        {card.name}
        <span
          className="p-1 border-[1px] border-gray-200 rounded"
          onClick={handleFavourite}
        >
          {isFavourite && <FcLike />}
          {!isFavourite && <FcLikePlaceholder />}
        </span>
      </p>
      <p className="text-sm mb-4">{card.description}</p>
      <p className="flex text-lg justify-between items-center">
        <span className="flex items-center gap-1">
          <TbSwords />
          <span className="text-red-500">{card.damage}</span>
        </span>
        <span className="flex items-center gap-1">
          <MdOutlineHealthAndSafety />
          <span className="text-sky-500">{card.health}</span>
        </span>
      </p>
      {onRemove && (
        <div
          className="
          absolute w-1/3 h-[20px] left-1/3 bottom-0 flex items-center opacity-0
          bg-red-400 rounded-tl rounded-tr transition-opacity duration-500
          group-hover:visible group-hover:opacity-100
        "
          onClick={() => onRemove(card.id)}
        >
          <MdDeleteForever className="flex w-full justify-center cursor-pointer text-white" />
        </div>
      )}
    </li>
  );
};

export default Card;
