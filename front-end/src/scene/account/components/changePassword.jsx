import { Button, Form, Input, message } from 'antd';
import React from 'react';
import bcrypt from 'bcryptjs';
import { stores } from '../../../store/storeInitializer';

const ChangePassword = props => {
	const [form] = Form.useForm();

	const onFinish = value => {
		bcrypt.compare(value.old_pass, props.data.password).then(async res => {
			if (res) {
				if (value.new_pass === value.rewrite) {
					await stores.accountStore.changePassword({
						id: props.data.id,
						newPassword: value.new_pass
					});
					okClick();
				} else {
					message.error('Mật khẩu mới không khớp, vui lòng nhập lại!');
					form.resetFields();
				}
			} else {
				message.error('Mật khẩu cũ không chính xác.');
				form.resetFields();
			}
		});
	};

	const cancelClick = () => {
		form.resetFields();
		props.cancelClick();
	};

	const okClick = () => {
		props.okClick();
		form.resetFields();
	};

	return (
		<React.Fragment>
			<Form form={form} onFinish={onFinish}>
				<Form.Item
					name="old_pass"
					label="Mật khẩu cũ:"
					rules={[
						{
							required: true,
							message: 'Nhập mật khẩu cũ!'
						},
						{
							min: 8,
							max: 15,
							message: 'Độ dài 8 - 15 ký tự.'
						}
					]}
				>
					<Input.Password />
				</Form.Item>
				<Form.Item
					name="new_pass"
					label="Mật khẩu mới:"
					rules={[
						{
							required: true,
							message: 'Nhập mật khẩu mới!'
						},
						{
							min: 8,
							max: 15,
							message: 'Độ dài 8 - 15 ký tự.'
						}
					]}
				>
					<Input.Password />
				</Form.Item>
				<Form.Item
					name="rewrite"
					label="Xác nhận lại:"
					rules={[
						{
							required: true,
							message: 'Nhập lại mật khẩu mới!'
						},
						{
							min: 8,
							max: 15,
							message: 'Độ dài 8 - 15 ký tự.'
						}
					]}
				>
					<Input.Password />
				</Form.Item>
				<Form.Item>
					<div className="button-container">
						<div className="edit-acc-butt">
							<Button htmlType="submit" type={'primary'} style={{ width: '90px' }}>
								Xác nhận
							</Button>
						</div>
						<div className="del-acc-butt">
							<Button htmlType="button" onClick={() => cancelClick()} style={{ width: '90px' }}>
								Hủy
							</Button>
						</div>
					</div>
				</Form.Item>
			</Form>
		</React.Fragment>
	);
};

export default ChangePassword;
