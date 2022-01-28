import {
  DragDropContext,
  DraggableLocation,
  DropResult,
} from 'react-beautiful-dnd';
import List from '../List';
import { loadLists } from '../../services/lists'

import { BoardContainer } from './styles';
import { useCallback, useEffect, useState } from 'react';
import { ICardList } from '../../interfaces/Card';
import CardsContext from '../../contexts/Cards';

const lists = loadLists()

interface IDropItem {
  cardIndex: number;
  columnIndex: number;
}

const isDropInActualPosition = (
  source: DraggableLocation,
  target: DraggableLocation,
): boolean => {
  const isSameIndex = source.index === target.index;
  const isSameColumn = source.droppableId === target.droppableId;

  const isSameCard = isSameIndex && isSameColumn;
  return isSameCard;
};


export function Board() {
  const [cardLists, setCardLists] = useState<ICardList[]>()

  const moveCard = (
    from: IDropItem,
    to: IDropItem,
    cards: ICardList[] | undefined,
  ): void => {
    if (!cards) return;

    const newCardList = Array.from(cards);

    const dragged = newCardList[from.columnIndex].cards[from.cardIndex];

    newCardList[from.columnIndex].cards.splice(from.cardIndex, 1);

    newCardList[to.columnIndex].cards.splice(to.cardIndex, 0, dragged);

    setCardLists(newCardList);
  };
  useEffect(() => {
    if (!cardLists)
      getCardLists().then((cardsLists) => setCardLists(cardsLists));
  }, [cardLists]);

  const getCardLists = async (): Promise<ICardList[]> => {
    const response = await fetch('/services/lists');
    const cardsLists = await response.json();
    return cardsLists;
  };

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { source, destination, draggableId } = result;

      if (!destination) return;

      if (isDropInActualPosition(source, destination)) return;

      const draggedItem = {
        cardIndex: source.index,
        columnIndex: Number(source.droppableId),
      };

      const droppedItem = {
        cardIndex: destination.index,
        columnIndex: Number(destination.droppableId),
      };

      moveCard(draggedItem, droppedItem, cardLists);
    },
    [cardLists],
  );

  return (
    <CardsContext.Provider value={{ cardLists, moveCard }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <BoardContainer>
          {lists.map((list: ICardList, index: number) => <List key={list.title} data={list} index={index} />)}
        </BoardContainer>
      </DragDropContext>
    </CardsContext.Provider>
  );
}

export default Board;