import React from 'react';
import { stores } from '../../../store/storeInitializer';
import './customService.css';

let data = {};

export default class ContractService extends React.Component {
	constructor(prop) {
		super(prop);
		this.state = {
			isLoad: false
		};
	}

	async componentDidMount() {
		await this.getServiceById();
		data = stores.serviceStore.serviceSelected;
		this.setState({ isLoad: !this.state.isLoad });
	}

	async componentDidUpdate(prevProps) {
		if (this.props.id !== prevProps.id) {
			await this.getServiceById();
			data = stores.serviceStore.serviceSelected;
			this.setState({ isLoad: !this.state.isLoad });
		}
	}

	getServiceById = async () => {
		await stores.serviceStore.getById(this.props.id);
	};

	render() {
		return (
			<div className="container">
				<div className="name">Tên dịch vụ:</div>
				<div className="name-value">{data.name}</div>
				<div className="code">Mã dịch vụ:</div>
				<div className="code-value">{data.code}</div>
				<div className="price">Giá tiền:</div>
				<div className="price-value">{data.price}</div>
				<div className="provider">Bên cung cấp:</div>
				<div className="provider-value">{data.provider}</div>
				<div className="des">Thông tin chi tiết:</div>
				<div className="des-value">{data.des}</div>
			</div>
		);
	}
}
// const ContractService = prop => {
// 	return (
// 		<div className="container">
// 			<div className="name">Tên dịch vụ:</div>
// 			<div className="name-value">{prop.service.name}</div>
// 			<div className="floor">Mã dịch vụ:</div>
// 			<div className="floor-value">{prop.service.code}</div>
// 			<div className="num">Giá tiền:</div>
// 			<div className="num-value">{prop.service.price}</div>
// 			<div className="area">Tình trạng:</div>
// 			<div className="area-value">{prop.service.status === true ? 'Có' : 'Không'}</div>
// 			<div className="price">Bên cung cấp:</div>
// 			<div className="price-value">{prop.service.provider}</div>
// 			<div className="des">Thông tin chi tiết:</div>
// 			<div className="des-value">{prop.service.des}</div>
// 		</div>
// 	);
// };

// export default ContractService;
