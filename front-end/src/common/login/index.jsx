import React from 'react';
import { Form, Button, Input, Modal, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.css';
import Register from './components/register';
import { stores } from '../../store/storeInitializer';
import { Navigate } from 'react-router-dom';
// import { Navigate } from 'react-router';
export default class Login extends React.Component {
	constructor(prop) {
		super(prop);
		this.state = {
			isLoad: false,
			user: null,
			isDeleted: false,
			isCreateModalVisible: false
		};
	}

	formRef = React.createRef();

	async validateInfo(data) {
		await stores.loginStore.validateInfo(data);
	}

	async componentDidMount() {
		this.setState({ isLoad: !this.state.isLoad });
	}

	onFinish = async value => {
		let data = Object.assign(value);
		await this.validateInfo(data);
		if (!stores.loginStore.loginRespond) {
			this.formRef.current.resetFields();
			message.error('Tài khoản hoặc mật khẩu không chính xác.');
		} else {
			sessionStorage.setItem('username', value.username);
			sessionStorage.setItem('password', value.password);
			sessionStorage.setItem('loggedIn', true);
			this.setState({ user: stores.loginStore.loginRespond });
		}
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
		let { user } = this.state;
		return (
			<div className="container">
				{user && <Navigate to="/" replace={true} />}
				<Form
					ref={this.formRef}
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
								min: 6,
								max: 15,
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
