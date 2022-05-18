import React from 'react';
import { stores } from '../../../store/storeInitializer';
import './customService.css';
import {Alert, Button, Popconfirm} from 'antd';

export default class ContractService extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoad: false
		};
	}

	async componentDidMount() {
		this.setState({ isLoad: !this.state.isLoad });
	}

	handleEdit = () => {
		this.props.okClick();
	};

	handleDelete = () => {
		this.props.closeClick();
	};

	// async componentDidUpdate(prevProps) {
	// 	if (this.props.id !== prevProps.id) {
	// 		await this.getServiceById();
	// 		data = stores.serviceStore.serviceSelected;
	// 		this.setState({ isLoad: !this.state.isLoad });
	// 	}
	// }

	// getServiceById = async () => {
	// 	await stores.serviceStore.getById(this.props.id);
	// };

	render() {
		return (
			<React.Fragment>
				<div className="pre-form-container">
					<div className="name">Tên dịch vụ:</div>
					<div className="name-value">{this.props.data.name}</div>
					<div className="floor">Mã dịch vụ:</div>
					<div className="floor-value">{this.props.data.code}</div>
					<div className="num">Giá tiền:</div>
					<div className="num-value">{this.props.data.price}</div>
					<div className="price">Bên cung cấp:</div>
					<div className="price-value">{this.props.data.provider}</div>
					<div className="des">Thông tin chi tiết:</div>
					<div className="des-value">{this.props.data.des}</div>
				</div>
				<div className="button-container">
					<div className="edit-pre-butt">
						<Button onClick={this.handleEdit} type={'primary'} style={{width: '90px'}}>
							Sửa
						</Button>
					</div>
					<div className="del-pre-butt">
						<Popconfirm placement="top" title={'Xóa dịch vụ này'} onConfirm={this.handleDelete} okText="Xác nhận" cancelText="Hủy">
							Xóa
						</Popconfirm>
					</div>
				</div>
			</React.Fragment>
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
