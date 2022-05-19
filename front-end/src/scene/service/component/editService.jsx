import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import './customService.css';
import { stores } from '../../../store/storeInitializer';

const { TextArea } = Input;

export default class EditService extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoad: false
		};
	}

	formRef = React.createRef();

	async componentDidMount() {
		this.setState({isLoad: !this.state.isLoad});
	}

	async updateService(data) {
		await stores.serviceStore.add_update(data);
	}

	onFinish = async value => {
		let temp = {
			id: this.props.data.id,
			disable: this.props.data.disable,
			status: this.props.data.status
		};
		let data = Object.assign(value, temp);
		console.log(value);
		await this.updateService(data);
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
					name={'edit-service'}
					fields={[
						{
							name: ['name'],
							value: this.props.data.name
						},
						{
							name: ['code'],
							value: this.props.data.code
						},
						{
							name: ['price'],
							value: this.props.data.price
						},
						{
							name: ['provider'],
							value: this.props.data.provider
						},
						{
							name: ['des'],
							value: this.props.data.des
						}
					]}
				>
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
						<TextArea rows={4} />
					</Form.Item>
					<Form.Item>
						<div className="button-container">
							<div className="edit-pre-butt">
								<Button htmlType="submit" onClick={this.handleEdit} type={'primary'} style={{width: '90px'}}>
									Xác nhận
								</Button>
							</div>
							<div className="del-pre-butt">
								<Button htmlType="button" onClick={this.handleClose} style={{width: '90px'}}>
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

// const EditService = prop => {
// 	const [form] = Form.useForm();
// 	const onFinish = val => {
// 		console.log(val);
// 	};
// 	const [value, setValue] = React.useState(1);

// 	const onChange = e => {
// 		console.log('radio checked', e.target.value);
// 		setValue(e.target.value);
// 	};
// 	return (
// 		<div>
// 			<Form form={form} onFinish={onFinish}>
// 				<Form.Item name="name" label="Tên dịch vụ:">
// 					<Input defaultValue={prop.service.name} />
// 				</Form.Item>
// 				<Form.Item name="code" label="Mã dịch vụ:">
// 					<Input defaultValue={prop.service.code} />
// 				</Form.Item>
// 				<Form.Item name="price" label="Giá tiền:">
// 					<InputNumber defaultValue={prop.service.price} />
// 				</Form.Item>
// 				<Form.Item name="provider" label="Bên cung cấp:">
// 					<Input defaultValue={prop.service.provider} />
// 				</Form.Item>
// 				<Form.Item name="status" label="Tình trạng:">
// 					<Radio.Group onChange={onChange} defaultValue={prop.service.status}>
// 						<Radio value={true}>Có</Radio>
// 						<Radio value={false}>Không</Radio>
// 					</Radio.Group>
// 				</Form.Item>
// 				<Form.Item name="des" label="Thông tin chi tiết:">
// 					<TextArea rows={4} defaultValue={prop.service.des} />
// 				</Form.Item>
// 			</Form>
// 		</div>
// 	);
// };

// export default EditService;
