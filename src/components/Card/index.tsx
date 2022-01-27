import { Draggable } from 'react-beautiful-dnd';
import LineChart from '../LineChart';

import { CardContainer } from './styles';
import PieChart from '../PieChart';
import DataCard from '../DataCard';
import { ICard } from '../../interfaces/Card';

export interface ICardProps {
  data: ICard;
  index: number;
}

export function Card({ data, index }: ICardProps) {
  return (
    <Draggable draggableId={String(data.id)} index={index}>
      {(provided, snapshot) => (

        <CardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          {data.title === "Revenue Today" ? <DataCard value={data.value} title={data.title} /> : null}
          {data.title === "Revenue Past 7 days" ? <DataCard value={data.value} title={data.title} /> : null}
          {data.title === "Revenue over time of 7 days" ? <LineChart lineData={data.data} graphType={data.graphType} title={data.title} /> : null}
          {data.title === "Profit over time of 7 days" ? <LineChart lineData={data.data} graphType={data.graphType} title={data.title} /> : null}
          {data.title === "Top 5 sellers" ? <PieChart pieData={data.data} graphType={data.graphType} title={data.title} labels={data.labels} /> : null}
          {data.title === "Top 5 ads" ? <PieChart pieData={data.data} graphType={data.graphType} title={data.title} labels={data.labels} /> : null}
        </CardContainer>

      )}

    </Draggable>

  );
}

export default Card;