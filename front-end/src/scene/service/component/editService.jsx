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
					<Input defaultValue={prop.service.name} />
				</Form.Item>
				<Form.Item name="code" label="Mã dịch vụ:">
					<Input defaultValue={prop.service.code} />
				</Form.Item>
				<Form.Item name="price" label="Giá tiền:">
					<InputNumber defaultValue={prop.service.price} />
				</Form.Item>
				<Form.Item name="provider" label="Bên cung cấp:">
					<Input defaultValue={prop.service.provider} />
				</Form.Item>
				<Form.Item name="status" label="Tình trạng:">
					<Radio.Group onChange={onChange} defaultValue={prop.service.status}>
						<Radio value={true}>Có</Radio>
						<Radio value={false}>Không</Radio>
					</Radio.Group>
				</Form.Item>
				<Form.Item name="des" label="Thông tin chi tiết:">
					<TextArea rows={4} defaultValue={prop.service.des} />
				</Form.Item>
			</Form>
		</div>
	);
};

export default EditService;
