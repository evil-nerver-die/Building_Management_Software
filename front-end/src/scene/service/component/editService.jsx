import React from 'react';
import { Form, Input, InputNumber, Radio } from 'antd';
import './customService.css';

const { TextArea } = Input;

const EditService = prop => {
	const [form] = Form.useForm();
	const onFinish = val => {
		console.log(val);
	};
	const [value, setValue] = React.useState(1);

	const onChange = e => {
		console.log('radio checked', e.target.value);
		setValue(e.target.value);
	};
	return (
		<div>
			<Form form={form} onFinish={onFinish}>
				<Form.Item name="name" label="Tên dịch vụ:">
					<Input defaultValue={prop.name} />
				</Form.Item>
				<Form.Item name="code" label="Mã dịch vụ:">
					<Input defaultValue={prop.code} />
				</Form.Item>
				<Form.Item name="price" label="Giá tiền:">
					<InputNumber defaultValue={prop.price} />
				</Form.Item>
				<Form.Item name="provider" label="Bên cung cấp:">
					<Input defaultValue={prop.provider} />
				</Form.Item>
				<Form.Item name="status" label="Tình trạng:">
					<Radio.Group onChange={onChange} defaultValue={prop.status}>
						<Radio value={1}>Có</Radio>
						<Radio value={2}>Không</Radio>
					</Radio.Group>
				</Form.Item>
				<Form.Item name="des" label="Thông tin chi tiết:">
					<TextArea rows={4} defaultValue={prop.des} />
				</Form.Item>
			</Form>
		</div>
	);
};

export default EditService;
