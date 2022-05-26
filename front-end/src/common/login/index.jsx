import React from 'react';
import { Form, Button, Input, Modal } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.css';
import Register from './components/register';
import { stores } from '../../store/storeInitializer';

// const onFinish = values => {
// 	console.log(values.username);
// };

export default class Login extends React.Component {
	constructor(prop) {
		super(prop);
		this.state = {
			isLoad: false,
			isDeleted: false,
			isCreateModalVisible: false
		};
	}

	async validateInfo(data) {
		await stores.loginStore.validateInfo(data);
	}

	async componentDidMount() {
		this.setState({ isLoad: !this.state.isLoad });
	}

	onFinish = async value => {
		let data = Object.assign(value);
		let check = this.validateInfo(data);
		console.log(check);
	};

	register_update = async () => {};

	toggleCreateModal = () => {
		this.setState({ isCreateModalVisible: true });
	};

	handleCreateOk = () => {
		this.componentDidMount();
		this.setState({ isCreateModalVisible: false });
	};

	handleCreateCancel = () => {
		this.setState({ isCreateModalVisible: false });
	};

	render() {
		return (
			<div className="container">
				<Form
					name="normal_login"
					className="login-form"
					initialValues={{
						remember: true
					}}
					onFinish={this.onFinish}
				>
					<Form.Item className="lab">
						<label className="lab1">BUILDING MANAGEMENT</label>
					</Form.Item>
					<Form.Item
						name="username"
						rules={[
							{
								required: true,
								message: 'Hãy nhập Username!'
							}
						]}
					>
						<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: 'Hãy nhập Password!'
							}
						]}
					>
						<Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit" className="login-form-button">
							Đăng nhập
						</Button>
						<Button onClick={this.toggleCreateModal} className="login-form-button">
							Đăng kí mới
						</Button>
					</Form.Item>
				</Form>
				<Modal
					afterClose={() => this.componentDidMount()}
					title="Đăng kí tài khoản"
					visible={this.state.isCreateModalVisible}
					onCancel={this.handleCreateCancel}
					footer={null}
				>
					<Register okClick={() => this.handleCreateOk()} cancelClick={() => this.handleCreateCancel} />
				</Modal>
			</div>
		);
	}
}
