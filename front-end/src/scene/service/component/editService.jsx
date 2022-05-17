import React from 'react';
import { Form, Input, InputNumber, Radio } from 'antd';
import './customService.css';
import { stores } from '../../../store/storeInitializer';

const { TextArea } = Input;

export default class EditService extends React.Component {
	constructor(prop) {
		super(prop);
		this.state = {
			isLoad: false
		};
	}

	data = stores.serviceStore.serviceSelected;

	componentDidUpdate(prevProps) {
		if (this.props.id !== prevProps.id) {
			this.data = stores.serviceStore.serviceSelected;
			this.setState({ isLoad: !this.state.isLoad });
		}
	}

	onFinish = value => {
		console.log(value);
	};

	render() {
		return (
			<div>
				<Form
					onFinish={this.onFinish}
					initialValues={{
						name: this.data.name,
						code: this.data.code,
						price: this.data.price,
						provider: this.data.provider,
						status: this.data.status,
						des: this.data.des
					}}
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
