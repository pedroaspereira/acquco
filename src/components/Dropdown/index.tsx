import { useState } from 'react';

import { DropdownContainerButton, DropdownList } from './styles';

const chartTypesProps = ['line', 'donut']

export default function DropdownMenu() {
  const [chartType, setChartType] = useState('line');


  const handleSelect = (eventKey: any) => {
    console.log(eventKey, 'handleSelect');
    setChartType(eventKey)
  }
  return (
    <>
      <DropdownContainerButton id="dropdown-basic-button" title={chartType} value={chartType} onSelect={handleSelect}>
        {chartTypesProps.map(chartTypesProp => {
          console.log(chartTypesProp, 'map')
          return (
            <DropdownList.Item key={chartTypesProp.toString()} eventKey={chartTypesProp}>{chartTypesProp}</DropdownList.Item>
          )
        })}
      </DropdownContainerButton>

    </>

  );
}
