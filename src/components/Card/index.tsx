import { Draggable } from 'react-beautiful-dnd';
import MyChart from '../MyChart';
import { ItemTypes } from '../ItemTypes';

import { CardContainer } from './styles';
import ProfitChart from '../ProfitChart';

export function Card({ data, index }: any) {

  console.log(data, 'dataCard')
  return (
    <Draggable draggableId={String(data.id)} index={index}>
      {(provided, snapshot) => (

        <CardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          {data.title === "Revenue Today" ? <ProfitChart data={data} /> : null}
          {data.title === "Revenue Past 7 days" ? <ProfitChart data={data} /> : null}
          {data.title === "Revenue over time of 7 days" ? <MyChart data={data} /> : null}
          {data.title === "Profit over time of 7 days" ? <MyChart data={data} /> : null}
          {data.title === "Top 5 sellers" ? <MyChart data={data} /> : null}
          {data.title === "Top 5 ads" ? <MyChart data={data} /> : null}
        </CardContainer>

      )}

    </Draggable>

  );
}

export default Card;