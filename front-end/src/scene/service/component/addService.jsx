import { Button, Form, Input, InputNumber } from 'antd';
import React from 'react';
import './customService.css';
import { stores } from '../../../store/storeInitializer';

const { TextArea } = Input;

export default class AddService extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoad: false
		};
	}

	formRef = React.createRef();

	async componentDidMount() {
		this.setState({ isLoad: !this.state.isLoad });
	}

	async addService(data) {
		await stores.serviceStore.add_update(data);
	}

	onFinish = async value => {
		let temp = {
			disable: true,
			status: true
		};
		let data = Object.assign(value, temp);
		await this.addService(data);
		this.handleEdit();
	};

	handleEdit = () => {
		this.props.okClick();
	};

	handleClose = () => {
		this.props.cancelClick();
		this.formRef.current.resetFields();
	};

	render() {
		return (
			<div>
				<Form onFinish={this.onFinish} ref={this.formRef} name={'add-service'}>
					<Form.Item name="name" label="Tên dịch vụ">
						<Input />
					</Form.Item>
					<Form.Item name="code" label="Mã dịch vụ">
						<Input />
					</Form.Item>
					<Form.Item name="price" label="Giá tiền">
						<InputNumber />
					</Form.Item>
					<Form.Item name="provider" label="Bên cung cấp">
						<Input />
					</Form.Item>
					<Form.Item name="des" label="Thông tin chi tiết">
						<Input />
					</Form.Item>
					<Form.Item>
						<div className="button-container">
							<div className="edit-pre-butt">
								<Button htmlType="submit" onClick={this.handleEdit} type={'primary'} style={{ width: '90px' }}>
									Xác nhận
								</Button>
							</div>
							<div className="del-pre-butt">
								<Button htmlType="button" onClick={this.handleClose} style={{ width: '90px' }}>
									Hủy
								</Button>
							</div>
						</div>
					</Form.Item>
				</Form>
			</div>
		);
	}
}
