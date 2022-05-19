import { Alert, Button, Popconfirm, Space } from 'antd';
import React from 'react';
import { stores } from '../../../store/storeInitializer';
import './index.css';
export default class SelectedPremise extends React.Component {
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

	checkout = () => {
		this.props.checkout();
	};

	rent = () => {
		this.props.rent();
	};

	render() {
		return (
			<React.Fragment>
				<div className="pre-form-container">
					<div className="name">Tên mặt bằng:</div>
					<div className="name-value">{this.props.data.name}</div>
					<div className="floor">Tầng:</div>
					<div className="floor-value">{this.props.data.floor}</div>
					<div className="num">Mã phòng:</div>
					<div className="num-value">{this.props.data.num}</div>
					<div className="area">Diện tích:</div>
					<div className="area-value">{this.props.data.area}</div>
					<div className="price">Giá:</div>
					<div className="price-value">{this.props.data.price}</div>
					<div className="des">Thông tin chi tiết:</div>
					<div className="des-value">{this.props.data.des}</div>
				</div>
				<div className="button-container">
					<Space>
						<Button onClick={this.handleEdit} type={'primary'} style={{ width: '90px' }}>
							Sửa
						</Button>
						<Popconfirm placement="top" title={'Xóa mặt bằng này?'} onConfirm={this.handleDelete} okText="Đồng ý" cancelText="Hủy">
							<Button type={'primary'} danger style={{ width: '90px' }}>
								Xóa
							</Button>
						</Popconfirm>
						{this.props.data.status === true ? (
							<Popconfirm placement="top" title={'Xác nhận'} onConfirm={this.checkout} okText="Đồng ý" cancelText="Hủy">
								<Button>Ngừng thuê</Button>
							</Popconfirm>
						) : (
							<Popconfirm placement="top" title={'Xác nhận'} onConfirm={this.rent} okText="Đồng ý" cancelText="Hủy">
								<Button style={{ width: '90px' }}>Thuê</Button>
							</Popconfirm>
						)}
					</Space>
				</div>
			</React.Fragment>
		);
	}
}
