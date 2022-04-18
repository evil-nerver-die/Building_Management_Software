import React from 'react';
import { Form, Input, InputNumber, Radio } from 'antd';
import './modalEmployee.css';

const { TextArea } = Input;

const EditEmployee = prop => {
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
				<Form.Item name="name" label="Tên nhân viên:">
					<Input defaultValue={prop.name} />
				</Form.Item>
				<Form.Item name="dob" label="Tuổi:">
					<Input defaultValue={prop.code} />
				</Form.Item>
				<Form.Item name="email" label="Email:">
					<InputNumber defaultValue={prop.price} />
				</Form.Item>
				<Form.Item name="phone" label="Điện thoại:">
					<Input defaultValue={prop.provider} />
				</Form.Item>
				<Form.Item name="gender" label="Giới tính:">
					<Radio.Group onChange={onChange} defaultValue={prop.status}>
						<Radio value={1}>Nam</Radio>
						<Radio value={2}>Nữ</Radio>
					</Radio.Group>
				</Form.Item>
				<Form.Item name="des" label="Thông tin chi tiết:">
					<TextArea rows={4} defaultValue={prop.des} />
				</Form.Item>
			</Form>
		</div>
	);
};

export default EditEmployee;
