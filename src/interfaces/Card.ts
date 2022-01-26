export interface ICard {
	id: number;
	graphType: string;
}

export interface ICardList {
	title: string;
	cards: ICard[];
}