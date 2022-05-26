import React from 'react';
import './index.css';
import { stores } from '../../store/storeInitializer';
import { CheckCircleOutlined, ClockCircleOutlined, ShopOutlined, TeamOutlined } from '@ant-design/icons';

let stat = {};
let data = [];
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
	}

	async componentDidMount() {
		await this.getData();
		stat = stores.accountStore.accountStat;
		data = stores.contractStore.contractListResult;
		this.setState({ isLoad: !this.state.isLoad });
	}

	getSumIncome(array) {
		let sum = 0;
		array.map(index => {
			sum += index.price;
		});

		return sum;
	}

	currenCyFormatter = new Intl.NumberFormat('vi', {
		style: 'currency',
		currency: 'VND'

		// These options are needed to round to whole numbers if that's what you want.
		//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
		//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
	});

	render() {
		return (
			<div className="heroBlock">
				<div className="main-home">
					<div className="gross-line">
						<div className="gross-bg">
							<div className="gross-content">
								<div>
									<p className="gross-title">Thu Nhập</p>
									<p className="gross-currency">{this.currenCyFormatter.format(this.getSumIncome(data))}</p>
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
				</div>
			</div>
		);
	}
}
