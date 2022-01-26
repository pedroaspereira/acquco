
import { Droppable } from 'react-beautiful-dnd';

import { ICardList } from '../../interfaces/Card';
import Card from "../Card";

import { ListContainer } from "./styles";

export interface ICardListProps {
  data: ICardList;
  index: number;
}

export default function List({ data, index }: any) {
  console.log(data, 'List')
  return (
    <ListContainer key={data.title}>
      <Droppable droppableId={String(index)}>
        {(provider) => (
          <ul ref={provider.innerRef}>
            {data.cards.map((card: any) => <Card key={card.id} data={card} />)}
          </ul>
        )}
      </Droppable>
    </ListContainer>
  )
}