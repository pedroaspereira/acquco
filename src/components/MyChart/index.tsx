import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

import { LineChartContainer } from './styles';

const timeframes = [
  'Today',
  'Yesterday',
  '7 Days Ago'
]


const options = {

}

const series = [
  {
    name: 'series1',
    data: [31, 120, 10, 28, 61, 18, 109]
  }
]

const chartTypesProps = ['line', 'donut']

export default function LineChart({ data }: any) {

  console.log(data, 'dataChart')
  return (
    <LineChartContainer>
      <p>{data.graphType}</p>
      <Chart options={options} series={series} type={data.graphType} height={160} width={500} />
    </LineChartContainer >
  )
}