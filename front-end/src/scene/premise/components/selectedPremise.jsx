import React from 'react';
import { stores } from '../../../store/storeInitializer';
import './index.css';
let data = {};
export default class SelectedPremise extends React.Component {
	constructor(prop) {
		super(prop);
		this.state = {
			isLoad: false
		};
	}

	async componentDidMount() {
		await this.getPremiseById();
		data = stores.premiseStore.premiseSelected;
		this.setState({ isLoad: !this.state.isLoad });
	}

	async componentDidUpdate(prevProps) {
		if (this.props.id !== prevProps.id) {
			await this.getPremiseById();
			data = stores.premiseStore.premiseSelected;
			this.setState({ isLoad: !this.state.isLoad });
		}
	}

	getPremiseById = async () => {
		await stores.premiseStore.getById(this.props.id);
	};

	render() {
		return (
			<div className="container">
				<div className="name">Tên mặt bằng:</div>
				<div className="name-value">{data.name}</div>
				<div className="floor">Tầng:</div>
				<div className="floor-value">{data.floor}</div>
				<div className="num">Mã phòng:</div>
				<div className="num-value">{data.num}</div>
				<div className="area">Diện tích:</div>
				<div className="area-value">{data.area}</div>
				<div className="price">Giá:</div>
				<div className="price-value">{data.price}</div>
				<div className="des">Thông tin chi tiết:</div>
				<div className="des-value">{data.des}</div>
			</div>
		);
	}
}
