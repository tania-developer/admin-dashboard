import React from 'react'
import {ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Tooltip, DateTime,Legend, LineSeries} from '@syncfusion/ej2-react-charts'
import { useStateContext } from '../../contexts/ContextProvider';
import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis} from '../../data/dummy';

function LineChart() {
  const {currentMode} = useStateContext();

  return (
   <ChartComponent
    id="line-chart"
    height="420px"
    chartArea={{border:{width: 0}}}
    primaryXAxis={LinePrimaryXAxis}
    primaryYAxis={LinePrimaryYAxis}
    tooltip={{enable: true}}
    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    legendSettings={{ background: 'white' }}
   >
     <Inject services={[LineSeries, Legend, DateTime,Tooltip]}/>
     <SeriesCollectionDirective>
       {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item}/>)}
     </SeriesCollectionDirective>
   </ChartComponent>
  )
}

export default LineChart;