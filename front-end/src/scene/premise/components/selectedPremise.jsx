import React from 'react';
import { PremiseStore } from '../../../store/premiseStore';
import './selectedPremise.css';
let data = {};
export default class SelectedPremise extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoad: false
		};
	}
	premiseStore = new PremiseStore();

	async componentDidMount() {
		await this.getPremiseById();
		data = this.premiseStore.premiseSelected;
		this.setState({ isLoad: !this.state.isLoad });
	}

	async componentDidUpdate(prevProps) {
		if (this.props.id !== prevProps.id) {
			await this.getPremiseById();
			data = this.premiseStore.premiseSelected;
			this.setState({ isLoad: !this.state.isLoad });
		}
	}

	getPremiseById = async () => {
		console.log(this.props.id);
		await this.premiseStore.getById(this.props.id);
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
