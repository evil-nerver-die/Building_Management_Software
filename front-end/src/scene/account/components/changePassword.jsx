import { Form, Input } from 'antd';
import React from 'react';

const ChangePassword = () => {
	const [form] = Form.useForm();
	const onFinish = value => {
		console.log(value);
	};
	return (
		<React.Fragment>
			<Form form={form} onFinish={onFinish}>
				<Form.Item name="old-pass" label="Mật khẩu cũ:">
					<Input />
				</Form.Item>
				<Form.Item name="new-pass" label="Mật khẩu mới:">
					<Input />
				</Form.Item>
				<Form.Item name="rewrite" label="Xác nhận:">
					<Input />
				</Form.Item>
			</Form>
		</React.Fragment>
	);
};

export default ChangePassword;
