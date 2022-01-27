import Chart from 'react-apexcharts';

import { PieChartContainer } from './styles';

interface IPieChartProps {
  pieData: number[] | undefined;
  graphType: string;
  title: string;
  labels: string[] | undefined;
}

export default function PieChart({ pieData, graphType, title, labels }: IPieChartProps) {
  const options = {
    legend: {
      position: 'bottom' as const,
    },
    labels: labels,
  };

  return (
    <PieChartContainer>
      <h2>{title}</h2>
      {/* <p>{value}</p> */}
      <Chart options={options} series={pieData} labels={labels} type={'pie'} height={220} width={500} />
    </PieChartContainer >
  )
}