import React from 'react';
import './index.css';
import { stores } from '../../store/storeInitializer';
import { CheckCircleOutlined, ClockCircleOutlined, ShopOutlined, TeamOutlined } from '@ant-design/icons';
import { GoPrimitiveDot } from 'react-icons/go';
import SparkLine from '../../common/chart/sparkLine';
import Stacked from '../../common/chart/stacked';

let stat = {};
let contractData = [];
let serviceData = [];
let sparkData = [
	{ x: 1, yval: 2 },
	{ x: 2, yval: 6 },
	{ x: 3, yval: 8 },
	{ x: 4, yval: 5 },
	{ x: 5, yval: 10 }
];

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoad: false
		};
	}

	async getData() {
		await stores.accountStore.getStat();
		await stores.contractStore.getAll();
		await stores.serviceStore.getAll();
	}

	async componentDidMount() {
		await this.getData();
		stat = stores.accountStore.accountStat;
		contractData = stores.contractStore.contractListResult;
		serviceData = stores.serviceStore.serviceListResult;
		this.setState({ isLoad: !this.state.isLoad });
	}

	getSumIncome(array) {
		let sum = 0;
		array.map(index => {
			return (sum += index.price);
		});
		return sum;
	}

	currenCyFormatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	});

	render() {
		return (
			<div className="heroBlock">
				<div className="main-home">
					<div className="gross-block">
						<div className="gross-bg">
							<div className="gross-content">
								<div>
									<p className="gross-title">Thu Nhập</p>
									<p className="gross-currency">{this.currenCyFormatter.format(this.getSumIncome(contractData))}</p>
								</div>
							</div>
						</div>
						<div className="home-counters">
							<div className="home-count">
								<div className="home-counters-icon" style={{ backgroundColor: 'rgba(59, 130, 246, 0.5)' }}>
									<TeamOutlined />
								</div>
								<p style={{ marginTop: '0.75rem', marginBottom: '0rem' }}>
									<span className="home-counters-numb">{stat.userCount}</span>
									<span style={{ marginLeft: '0.5rem', color: 'green' }}>+10%</span>
								</p>
								<p className="home-counter-title">Người dùng</p>
							</div>
						</div>
						<div className="home-counters">
							<div className="home-count">
								<div className="home-counters-icon" style={{ backgroundColor: 'rgb(255,244,229)' }}>
									<ShopOutlined />
								</div>
								<p style={{ marginTop: '0.75rem', marginBottom: '0rem' }}>
									<span className="home-counters-numb">{stat.premiseCount}</span>
									<span style={{ marginLeft: '0.5rem', color: 'green' }}></span>
								</p>
								<p className="home-counter-title">Mặt bằng</p>
							</div>
						</div>
						<div className="home-counters">
							<div className="home-count">
								<div className="home-counters-icon" style={{ backgroundColor: 'rgb(217,234,211)' }}>
									<CheckCircleOutlined />
								</div>
								<p style={{ marginTop: '0.75rem', marginBottom: '0rem' }}>
									<span className="home-counters-numb">{stat.rentedPremises}</span>
									<span style={{ marginLeft: '0.5rem', color: 'green' }}>+20%</span>
								</p>
								<p className="home-counter-title">Đã thuê</p>
							</div>
						</div>
						<div className="home-counters">
							<div className="home-count">
								<div className="home-counters-icon" style={{ backgroundColor: 'rgb(237,125,49)' }}>
									<ClockCircleOutlined />
								</div>
								<p style={{ marginTop: '0.75rem', marginBottom: '0rem' }}>
									<span className="home-counters-numb">{stat.availablePremises}</span>
									<span style={{ marginLeft: '0.5rem', color: 'red' }}>-50%</span>
								</p>
								<p className="home-counter-title">Có sẵn</p>
							</div>
						</div>
					</div>
					<div className="home-chart">
						<div style={{ margin: '0.75rem', padding: '1rem', borderRadius: '9999px', width: '780px' }}>
							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<p style={{ fontWeight: '600', fontSize: '1.25rem', lineHeight: '1.75rem' }}>Biến động doanh thu</p>
								<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
									<p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgb(75 85 99)' }}>
										<span>
											<GoPrimitiveDot />
										</span>
										<span>Chi phí</span>
									</p>
									<p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'green' }}>
										<span>
											<GoPrimitiveDot />
										</span>
										<span>Ngân sách</span>
									</p>
								</div>
							</div>
							<div style={{ gap: '2.5rem', display: 'flex', flexWrap: 'wrap', marginTop: '2.5rem', justifyContent: 'center' }}>
								<div style={{ borderRightWidth: '1px', borderColor: 'black', margin: '1rem', paddingRight: '2.5rem' }}>
									<div>
										<p>
											<span style={{ fontSize: '1.875rem', lineHeight: '2.25rem', fontWeight: '600' }}>
												{this.currenCyFormatter.format(this.getSumIncome(serviceData))}
											</span>
											<span
												style={{
													padding: '0.375rem',
													cursor: 'pointer',
													borderRadius: '9999px',
													color: 'white',
													backgroundColor: 'rgb(74 222 128)',
													marginLeft: '0.75rem',
													fontSize: '0.75rem',
													lineHeight: '1rem'
												}}
											>
												17%
											</span>
										</p>
										<p style={{ textDecorationColor: '#6b7280', marginTop: '0.25rem' }}>Ngân sách</p>
									</div>
									<div style={{ marginTop: '2rem' }}>
										<p style={{ fontSize: '1.875rem', lineHeight: '2.25rem', fontWeight: '600' }}>
											{this.currenCyFormatter.format(this.getSumIncome(contractData) - this.getSumIncome(serviceData))}
										</p>
										<p style={{ textDecorationColor: '#6b7280', marginTop: '0.25rem' }}>Chi phí</p>
									</div>
									<div style={{ marginTop: '1.25rem' }}>
										<SparkLine currentColor={'black'} id="line-sparkLine" type="Line" height="80px" width="250px" data={sparkData} color={'black'} />
									</div>
								</div>
								<div>
									<Stacked width="320px" height="360px" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
