import { Alert, Button, Popconfirm } from 'antd';
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
					<div className="edit-pre-butt">
						<Button onClick={this.handleEdit} type={'primary'} style={{ width: '90px' }}>
							Sửa
						</Button>
					</div>
					<div className="del-pre-butt">
						<Popconfirm placement="top" title={'Xóa mặt bằng này?'} onConfirm={this.handleDelete} okText="Xác nhận" cancelText="Hủy">
							<Button type={'primary'} danger style={{ width: '90px' }}>
								Xóa
							</Button>
						</Popconfirm>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
