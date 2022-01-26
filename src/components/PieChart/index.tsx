import Chart from 'react-apexcharts';

import { PieChartContainer } from './styles';

export default function PieChart({ data }: any) {
  const options = {
    legend: {
      position: 'bottom' as const,
    },
    labels: data.labels,
  };

  return (
    <PieChartContainer>
      <h2>{data.title}</h2>
      <p>{data.value}</p>
      <Chart options={options} series={data.data} labels={data.labels} type={data.graphType} height={220} width={500} />
    </PieChartContainer >
  )
}