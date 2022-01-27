export interface ICardList {
	title: string;
	cards: ICard[];
}export interface ICard {
	id: number;
	title: string;
	graphType: string;
	value?: number;
	labels?: string[];
	data?: number[];
}

