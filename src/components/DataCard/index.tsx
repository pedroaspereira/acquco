import React from "react";
import { ICard } from "../../interfaces/Card";
import { DataCardContainer, DataCardTitle, DataCardValueContainer, DataCardValue } from "./styles"

interface IDataCardProps {
  title: string;
  value: number | undefined;
}

export default function DataCard({ title, value }: IDataCardProps) {

  return (
    <DataCardContainer>
      <DataCardTitle>{title}</DataCardTitle>
      <DataCardValueContainer>
        <DataCardValue>
          $ {value}
        </DataCardValue>
      </DataCardValueContainer>
    </DataCardContainer>
  )
}