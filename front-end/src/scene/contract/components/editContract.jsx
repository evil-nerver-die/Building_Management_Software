import React from 'react';
import {Button, Form, Input, InputNumber} from 'antd';
import './selectedContract.css';
import { stores } from '../../../store/storeInitializer';

const { TextArea } = Input;

export default class EditContract extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoad: false
		};
	}

	fromRef = React.createRef();

	async componentDidMount() {
		this.setState({ isLoad: !this.state.isLoad });
	}

	async updateContract(data) {
		await stores.contractStore.createUpdate(data);
	}

	onFinish = async value => {
		let temp = {
			id: this.props.data.id,
			disable: this.props.data.disable,
			status: this.props.data.status
		};
		let data = Object.assign(value, temp);
		console.log(data);
		await this.updateContract(data);
	};

	handleEdit = () => {
		this.props.okClick();
	};

	handleClose = () => {
		this.props.cancelClick();
		this.formRef.current.resetFields();
	};

	render() {
		return(
			<div>
				<Form
					onFinish={this.onFinish}
					initialValues={{
						name: this.data.name,
						code: this.data.code,
						ended: this.data.ended,
						provider: this.data.provider,
						des: this.data.des
					}}
				>
					<Form.Item name="name" label="Tên hợp đồng">
						<Input />
					</Form.Item>
					<Form.Item name="code" label="Code">
						<Input />
					</Form.Item>
					<Form.Item name="dateEnd" label="Ngày hết hạn">
						<Input />
					</Form.Item>
					<Form.Item name="provider" label="Nhà cung cấp">
						<Input />
					</Form.Item>
					<Form.Item name="des" label="Thông tin chi tiết:">
						<TextArea rows={4} />
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