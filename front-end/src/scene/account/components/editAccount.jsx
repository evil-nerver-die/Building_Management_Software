import { DatePicker, Form, Input, Select } from 'antd';
import React from 'react';
import moment from 'moment';
const { Option } = Select;
const dateFormat = 'DD/YY/YYYY';

const EditAccount = prop => {
	const [form] = Form.useForm();
	const onFinish = value => {
		console.log(value);
	};
	return (
		<React.Fragment>
			<Form form={form} onFinish={onFinish}>
				<Form.Item name="name" label="Họ tên:">
					<Input defaultValue={prop.data.name} />
				</Form.Item>
				<Form.Item name="dob" label="Ngày sinh">
					<DatePicker defaultValue={moment(prop.data.dob, dateFormat)} format={dateFormat} />
				</Form.Item>
				<Form.Item name="email" label="Email:">
					<Input defaultValue={prop.data.email} />
				</Form.Item>
				<Form.Item name="phone" label="Số điện thoại:">
					<Input defaultValue={prop.data.phone} />
				</Form.Item>
				<Form.Item name="gender" label="Giới tính:">
					<Select defaultValue={prop.data.gender === true ? 'Nam' : 'Nữ'}>
						<Option value={true}>Nam</Option>
						<Option value={false}>Nữ</Option>
					</Select>
				</Form.Item>
				<Form.Item name="file" label="Tệp đính kèm:">
					<Input defaultValue={prop.data.file} />
				</Form.Item>
			</Form>
		</React.Fragment>
	);
};

export default EditAccount;
