import { LineChart, BarChart, StackedBarChart } from 'react-graphs-svg'
import github from './svg/github'
import Hero from './svg/hero'
import npm from './svg/npm'
import { CodeBlock } from './components/CodeBlock'
import Link from 'next/link'
import { Header } from './components/Header'
import { Content } from './components/Content'
import { ChartContent } from './components/ChartContent'
import { axisData1, data1, axisData2, data2, axisData3, data3, axisData4, data4 } from './chart-data'
export default function Home() {
  return (
    <div >
      <main className='grid grid-rows-[repeat(6,_auto)] gap-16 bg-gradient-to-b from-gray-800 via-slate-800  to-[#23043c]' >
        <Header />

        <section className='grid grid-cols-[1fr_2fr] justify-items-center'>
          <div className='grid grid-rows-[auto_auto] content-center gap-8 '>

            <Link href="https://github.com/schemburkar/react-graphs-svg/" className='grid'>
              <button className='rounded bg-white border border-gray-300 p-2 hover:bg-gray-200'>{github} GitHub Repository</button>
            </Link>
            <Link href="https://www.npmjs.com/package/react-graphs-svg" className='grid' >
              <button className='rounded bg-white border border-gray-300 p-2 hover:bg-gray-200'>{npm} npm</button>
            </Link>
          </div>
          <div className='p-4 w-3/5'>{Hero}</div>
        </section>


        <ChartContent title={'Line Chart'} className="bg-none" description={`Chart with a polyline and marked points`}>
          <LineChart axis={axisData1} size={[200, 100]} data={data1} margins={{ margin: [10, 10], startOffset: [5, 5] }} >
          </LineChart>
        </ChartContent>

        <ChartContent title={'Bar Chart'} description={`Chart with vertical column bars`}>
          <BarChart axis={axisData2} size={[200, 100]} data={data2} margins={{ margin: [10, 10], startOffset: [5, 5] }} >
          </BarChart>
        </ChartContent>

        <ChartContent title={'Stacked Bar Chart'} description={`Chart with vertical column stacks`}>
          <StackedBarChart seriesNames={['JAN-MAR', 'APR-JUN', 'JUL-SEP', 'OCT-DEC']} axis={axisData3} size={[200, 100]} data={data3} margins={{ margin: [10, 12], startOffset: [5, 5] }} >
          </StackedBarChart>
        </ChartContent>

        <ChartContent className={'custom-bar-chart '} title={'Customized Bar Chart'} description={`Showcasing the custom styling capabilities`}>
          <StackedBarChart seriesNames={['A', 'B', 'C', 'D']} axis={axisData4} size={[200, 100]} data={data4} margins={{ margin: [10, 15], startOffset: [5, 5] }} >
          </StackedBarChart>
        </ChartContent>




        <Content title={'Sample Code for Line Chart'} description={'Shows a chart with Months on X-axis and Numbers on Y-Axis'}>
          <CodeBlock title={'Chart Axis data '} code={`${'```'}jsx
const xaxis =  [
  { value: 1672531200000, text: 'Jan 23' }, 
  { value: 1675209600000, text: 'Feb 23' }, 
  // ...
  { value: 1701388800000, text: 'Dec 23' }];
const yaxis =  [ 10, 20, /* ...*/ 100 ]
const axis = [xaxis, yaxis];
${'```'}`} />
          <CodeBlock title={'Chart Dataset'} code={`${'```'}jsx
const data = [
  [{ value: 1672531200000, text: 'Jan 23' }, 12], 
  [{ value: 1675209600000, text: 'Feb 23' }, 15], 
  // ...
  [{ value: 1701388800000, text: 'Dec 23' }, 55]];
  ${'```'}`} />

          <CodeBlock title={'Line Chart'} code={`${'```'}jsx
import { LineChart } from 'react-graphs-svg'

const size = [200, 100];
const margins = { margin: [10, 10], startOffset: [5, 5] };
<LineChart axis={axis} size={size} data={data} margins={margins}>
</LineChart>
${'```'}`} />
        </Content>


        <Content title={'API reference'} description={'Data type for Axis, Dataset and Chart props'}>

          <CodeBlock title={'BaseChartProps'} code={`${'```'}ts
type XY<X = number, Y = X> = [x: X, y: Y];
type Data = number | { value: number; text: string; };

type BaseChartProps = {
  className?: string;
  children?: ReactNode;
  axis: XY<Data[]>;
  size: XY;
  margins: Margins;
};
${'```'}`} />


          <CodeBlock title={'Line Chart Props'} code={`${'```'}ts
type LineChartProps = BaseChartProps & {
  data:XY<Data>[]
};
${'```'}`} />


          <CodeBlock title={'Bar Chart Props'} code={`${'```'}ts
type BarChartProps = BaseChartProps & {
  data:XY<Data>[]
};
${'```'}`} />


          <CodeBlock title={'Stacked Bar Chart Props'} code={`${'```'}ts
type StackedBarChartProps = BaseChartProps & {
  data: XY<Data, Data[]>[]
  seriesNames: string[];
};
${'```'}`} />

        </Content>

        <footer>

        </footer>
      </main>
    </div>
  )
}


