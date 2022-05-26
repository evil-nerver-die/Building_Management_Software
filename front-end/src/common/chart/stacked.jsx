import React from 'react';
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	Legend,
	Category,
	StackingColumnSeries,
	Tooltip
} from '@syncfusion/ej2-react-charts';

export const stackedPrimaryXAxis = {
	majorGridLines: { width: 0 },
	minorGridLines: { width: 0 },
	majorTickLines: { width: 0 },
	minorTickLines: { width: 0 },
	interval: 1,
	lineStyle: { width: 0 },
	labelIntersectAction: 'Rotate45',
	valueType: 'Category'
};

export const stackedPrimaryYAxis = {
	lineStyle: { width: 0 },
	minimum: 0,
	maximum: 10000000,
	interval: 1000000,
	majorTickLines: { width: 0 },
	majorGridLines: { width: 1 },
	minorGridLines: { width: 1 },
	minorTickLines: { width: 0 },
	labelFormat: '{value}'
};
export const stackedChartData = [
	[
		{ x: 'Jan', y: 2114324 },
		{ x: 'Feb', y: 524213 },
		{ x: 'Mar', y: 3453632 },
		{ x: 'Apr', y: 655434 },
		{ x: 'May', y: 3554353 },
		{ x: 'Jun', y: 2595435 },
		{ x: 'Jul', y: 559433 },
		{ x: 'Aug', y: 711645 },
		{ x: 'Sep', y: 227344 },
		{ x: 'Oct', y: 5434324 },
		{ x: 'Nov', y: 259434 },
		{ x: 'Dec', y: 2593535 }
	],
	[
		{ x: 'Jan', y: 532434 },
		{ x: 'Feb', y: 5273243 },
		{ x: 'Mar', y: 3433543 },
		{ x: 'Apr', y: 2596554 },
		{ x: 'May', y: 659664 },
		{ x: 'Jun', y: 35932 },
		{ x: 'Jul', y: 6596545 },
		{ x: 'Aug', y: 811543 },
		{ x: 'Sep', y: 927543 },
		{ x: 'Oct', y: 443543 },
		{ x: 'Nov', y: 3595435 },
		{ x: 'Dec', y: 2595435 }
	]
];
export const stackedCustomSeries = [
	{ dataSource: stackedChartData[0], xName: 'x', yName: 'y', name: 'Ngân sách', type: 'StackingColumn', background: 'blue' },

	{ dataSource: stackedChartData[1], xName: 'x', yName: 'y', name: 'Chi phí', type: 'StackingColumn', background: 'red' }
];

const Stacked = ({ width, height }) => {
	return (
		<ChartComponent
			id="charts"
			primaryXAxis={stackedPrimaryXAxis}
			primaryYAxis={stackedPrimaryYAxis}
			width={width}
			height={height}
			chartArea={{ border: { width: 0 } }}
			tooltip={{ enable: true }}
			legendSettings={{ background: 'white' }}
			style={{
				border: {
					//Background and border opacity of Chart. Default value is 0.3
					opacity: 1
				}
			}}
		>
			<Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
			<SeriesCollectionDirective>
				{stackedCustomSeries.map((item, index) => (
					<SeriesDirective key={index} {...item} />
				))}
			</SeriesCollectionDirective>
		</ChartComponent>
	);
};

export default Stacked;
