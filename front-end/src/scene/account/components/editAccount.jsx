import { Button, DatePicker, Form, Input, Select } from 'antd';
import React from 'react';
import moment from 'moment';
import { stores } from '../../../store/storeInitializer';
const { Option } = Select;
const dateFormat = 'DD/MM/YYYY';

const EditAccount = prop => {
	const [form] = Form.useForm();
	
	const onFinish = async value => {
		let date = moment(value.dob._d.toDateString()).format(dateFormat);
		let temp = {
			id: prop.data.id,
			username: prop.data.username,
			password: prop.data.password,
			roles: prop.data.roles,
			locked: prop.data.locked,
			enabled: prop.data.enabled
		};
		Object.assign(temp, value);
		temp.dob = date;
		console.log(temp);
		await updateInfo(temp);
		prop.okClick();
	};

	const updateInfo = async data => {
		await stores.accountStore.updateInfo(data);
	};

	const cancelClick = () => {
		prop.cancelClick();
	};

	return (
		<React.Fragment>
			<Form
				form={form}
				onFinish={onFinish}
				fields={[
					{
						name: 'name',
						value: prop.data.name
					},
					{
						name: 'dob',
						value: prop.data.dob
					},
					{
						name: 'email',
						value: prop.data.email
					},
					{
						name: 'phone',
						value: prop.data.phone
					},
					{
						name: 'gender',
						value: prop.data.gender
					},
					{
						name: 'file',
						value: prop.data.file
					}
				]}
			>
				<Form.Item
					name="name"
					label="Họ tên:"
					rules={[
						{
							required: true,
							message: 'Hãy nhập họ tên!'
						}
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item name="dob" label="Ngày sinh">
					<DatePicker format={dateFormat} />
				</Form.Item>
				<Form.Item
					name="email"
					label="Email:"
					rules={[
						{
							required: true,
							message: 'Hãy nhập thư điện tử!'
						}
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					name="phone"
					label="Số điện thoại:"
					rules={[
						{
							required: true,
							message: 'Hãy nhập số điện thoại!'
						}
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item name="gender" label="Giới tính:">
					<Select>
						<Option value={true}>Nam</Option>
						<Option value={false}>Nữ</Option>
					</Select>
				</Form.Item>
				<Form.Item name="file" label="Tệp đính kèm:">
					<Input />
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

export default EditAccount;
