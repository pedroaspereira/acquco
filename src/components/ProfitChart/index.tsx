import Chart from 'react-apexcharts';

import { ProfitChartContainer } from './styles';

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

export default function ProfitChart({ data }: any) {

  console.log(data, 'dataChart')
  return (
    <ProfitChartContainer>
      <h2>{data.title}</h2>
      <p>{data.value}</p>
      <Chart options={options} series={series} type={data.graphType} height={160} width={500} />
    </ProfitChartContainer >
  )
}