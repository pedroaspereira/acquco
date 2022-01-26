

import { DataCardContainer, DataCardTitle, DataCardValueContainer, DataCardValue } from "./styles"

export default function DataCard({ data }: any) {
  return (
    <DataCardContainer>
      <DataCardTitle>{data.title}</DataCardTitle>
      <DataCardValueContainer>
        <DataCardValue>
          {data.value}
        </DataCardValue>
      </DataCardValueContainer>
    </DataCardContainer>
  )
}