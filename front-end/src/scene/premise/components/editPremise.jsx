import { Button, Form, Input, InputNumber } from 'antd';
import React from 'react';
import './index.css';
import { stores } from '../../../store/storeInitializer';

const { TextArea } = Input;

export default class EditPremise extends React.Component {
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

	async updatePrem(data) {
		await stores.premiseStore.create_update(data);
	}

	onFinish = async value => {
		let temp = {
			id: this.props.data.id,
			disable: this.props.data.disable,
			status: this.props.data.status
		};
		let data = Object.assign(value, temp);
		await this.updatePrem(data);
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
				<Form
					onFinish={this.onFinish}
					ref={this.formRef}
					name={'edit-premise'}
					fields={[
						{
							name: ['name'],
							value: this.props.data.name
						},
						{
							name: ['floor'],
							value: this.props.data.floor
						},
						{
							name: ['num'],
							value: this.props.data.num
						},
						{
							name: ['area'],
							value: this.props.data.area
						},
						{
							name: ['price'],
							value: this.props.data.price
						},
						{
							name: ['des'],
							value: this.props.data.des
						}
					]}
				>
					<Form.Item
						name="name"
						label="Tên mặt bằng:"
						rules={[
							{
								required: true,
								message: 'Hãy nhập tên mặt bằng!'
							}
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name="floor"
						label="Tầng:"
						rules={[
							{
								required: true,
								message: 'Hãy nhập số tầng!'
							}
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name="num"
						label="Mã phòng:"
						rules={[
							{
								required: true,
								message: 'Hãy nhập mã phòng!'
							}
						]}
					>
						<InputNumber className="premise-inputnumber" min={1} />
					</Form.Item>
					<Form.Item name="area" label="Diện tích:">
						<InputNumber className="premise-inputnumber" min={0} />
					</Form.Item>
					<Form.Item name="price" label="Giá:">
						<InputNumber className="premise-inputnumber" min={0} />
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
