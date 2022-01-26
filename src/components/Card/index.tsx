import { Draggable } from 'react-beautiful-dnd';
import LineChart from '../LineChart';

import { CardContainer } from './styles';
import PieChart from '../PieChart';
import DataCard from '../DataCard';

export function Card({ data, index }: any) {

  return (
    <Draggable draggableId={String(data.id)} index={index}>
      {(provided, snapshot) => (

        <CardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          {data.title === "Revenue Today" ? <DataCard data={data} /> : null}
          {data.title === "Revenue Past 7 days" ? <DataCard data={data} /> : null}
          {data.title === "Revenue over time of 7 days" ? <LineChart data={data} /> : null}
          {data.title === "Profit over time of 7 days" ? <LineChart data={data} /> : null}
          {data.title === "Top 5 sellers" ? <PieChart data={data} /> : null}
          {data.title === "Top 5 ads" ? <PieChart data={data} /> : null}
        </CardContainer>

      )}

    </Draggable>

  );
}

export default Card;