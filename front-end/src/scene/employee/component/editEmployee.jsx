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
					<Input defaultValue={prop.employee.name} />
				</Form.Item>
				<Form.Item name="dob" label="Tuổi:">
					<Input defaultValue={prop.employee.dob} />
				</Form.Item>
				<Form.Item name="email" label="Email:">
					<InputNumber defaultValue={prop.employee.email} />
				</Form.Item>
				<Form.Item name="phone" label="Điện thoại:">
					<Input defaultValue={prop.employee.phone} />
				</Form.Item>
				<Form.Item name="gender" label="Giới tính:">
					<Radio.Group onChange={onChange} defaultValue={prop.employee.gender}>
						<Radio value={true}>Nam</Radio>
						<Radio value={false}>Nữ</Radio>
					</Radio.Group>
				</Form.Item>
				<Form.Item name="des" label="Thông tin chi tiết:">
					<TextArea rows={4} defaultValue={prop.employee.des} />
				</Form.Item>
			</Form>
		</div>
	);
};

export default EditEmployee;
