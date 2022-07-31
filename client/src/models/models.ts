
export interface ICardNew {
  name: string;
  description: string;
  damage: number;
  health: number;
}

export interface ICard extends ICardNew {
  id: number;
}

export interface IGetCardsServerResponse {
  data: ICard[];
}
