import { Button, Form, Input, DatePicker, Select } from 'antd';
import React from 'react';
import './register.css';
import bcrypt, { hash } from 'bcryptjs';
import { stores } from '../../../store/storeInitializer';

const { Option } = Select;
const dateFormat = 'DD/MM/YYYY';

export default class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoad: false
		};
	}

	formRef = React.createRef();

	async componentDidMount() {
		this.setState({ isLoad: !this.state.isLoad });
	}

	async register(data) {
		await stores.loginStore.registerAcc(data);
	}

	onFinish = async value => {
		let temp = {
			disable: true,
			status: true
		};
		value.password = bcrypt.hashSync(value.password);
		// console.log(value.password);
		let data = Object.assign(value, temp);
		await this.register(data);
		this.handleEdit();
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
				<Form onFinish={this.onFinish} ref={this.formRef} name={'register-acc'}>
					<Form.Item name="name" label="Tên người dùng">
						<Input />
					</Form.Item>
					<Form.Item name="dob" label="Ngày sinh">
						<DatePicker format={dateFormat} />
					</Form.Item>
					<Form.Item name="email" label="Email">
						<Input />
					</Form.Item>
					<Form.Item name="phone" label="Điện thoại">
						<Input style={{ width: '200px' }} />
					</Form.Item>
					<Form.Item name="gender" label="Giới tính">
						<Select>
							<Option value={true}>Nam</Option>
							<Option value={false}>Nữ</Option>
						</Select>
					</Form.Item>
					<Form.Item name="username" label="Tên đăng nhập">
						<Input />
					</Form.Item>
					<Form.Item name="password" label="Mật khẩu">
						<Input.Password />
					</Form.Item>
					<Form.Item name="enabled" label="Kích hoạt">
						<Select>
							<Option value={true}>Có</Option>
							<Option value={false}>Không</Option>
						</Select>
					</Form.Item>
					<Form.Item name="roles" label="Vai trò">
						<Select>
							<Option value={'ADMIN'}>Quản trị viên</Option>
							<Option value={'USER'}>Khách hàng</Option>
						</Select>
					</Form.Item>
					<Form.Item>
						<div className="button-container">
							<div className="edit-pre-butt">
								<Button htmlType="submit" onClick={this.handleEdit} type={'primary'} style={{ width: '90px' }}>
									Xác nhận
								</Button>
							</div>
						</div>
					</Form.Item>
				</Form>
			</div>
		);
	}
}
