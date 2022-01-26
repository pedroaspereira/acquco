import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

import { LineChartContainer } from './styles';

export default function LineChart({ data }: any) {
  const options = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth' as const,
    },
    xaxis: {
      type: 'datetime' as const,
      categories: [
        "1/22/20",
        "2/1/20",
        "2/15/20",
        "3/1/20",
        "3/15/20",
        "4/1/20",
        "4/15/20",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
    },
  };

  const series = [
    {
      name: 'revenue',
      data: data.data
    }
  ]

  return (
    <LineChartContainer>
      <h2>{data.title}</h2>
      <Chart options={options} series={series} type={data.graphType} height={200} width={450} />
    </LineChartContainer >
  )
}