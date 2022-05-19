import { Button, Card, Modal, Space } from 'antd';
import React from 'react';
import EditAccount from './components/editAccount';
import ChangePassword from './components/changePassword';
import './index.css';
import { stores } from '../../store/storeInitializer';
let data = {};
export default class Account extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoad: false,
			isShowEdit: false,
			isShowChange: false
		};
	}

	async componentDidMount() {
		await this.getInfo();
		data = stores.accountStore.accountData.at(0);
		this.setState({ isLoad: true });
	}

	getInfo = async () => {
		await stores.accountStore.getInfo();
	};

	toggleEdit = () => {
		this.setState({ isShowEdit: true });
	};

	togglechange = () => {
		this.setState({ isShowChange: true });
	};

	handleEditOk = () => {
		this.setState({ isShowEdit: false });
	};

	handleEditCancel = () => {
		this.setState({ isShowEdit: false });
	};

	handleChangeOk = () => {
		this.componentDidMount();
		this.setState({ isShowChange: false });
	};

	handleChangeCancel = () => {
		this.setState({ isShowChange: false });
	};

	render() {
		return (
			<div className="account">
				<Card bordered={false} bodyStyle={{ borderStyle: 'groove' }}>
					<Card className="account-info" bordered={false}>
						<div className="account-line">
							<div className="account-label">Họ tên:</div>
							<div className="account-value">{data.name}</div>
						</div>
						<div className="account-line">
							<div className="account-label">Ngày sinh:</div>
							<div className="account-value">{data.dob}</div>
						</div>
						<div className="account-line">
							<div className="account-label">Email:</div>
							<div className="account-value">{data.email}</div>
						</div>
						<div className="account-line">
							<div className="account-label">Số điện thoại:</div>
							<div className="account-value">{data.phone}</div>
						</div>
						<div className="account-line">
							<div className="account-label">Giới tính:</div>
							<div className="account-value">{data.gender === true ? 'Nam' : 'Nữ'}</div>
						</div>
						<div className="account-line">
							<div className="account-label">Tệp đính kèm:</div>
							<div className="account-value">{data.file}</div>
						</div>
						<div className="account-line" style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
							<Space>
								<Button type="primary" onClick={this.toggleEdit}>
									Sửa
								</Button>
								<Button type="primary" danger onClick={this.togglechange}>
									Đổi mật khẩu
								</Button>
								<Button href={'https://bms-2.herokuapp.com/logout'}>Đăng xuất</Button>
							</Space>
						</div>
						<Modal
							afterClose={() => {
								this.componentDidMount();
							}}
							title={'Sửa thông tin'}
							visible={this.state.isShowEdit}
							onCancel={this.handleEditCancel}
							footer={null}
						>
							<EditAccount data={data} okClick={() => this.handleEditOk()} cancelClick={() => this.handleEditCancel()} />
						</Modal>
						<Modal
							title={'Đổi mật khẩu'}
							visible={this.state.isShowChange}
							onCancel={this.handleChangeCancel}
							onOk={this.handleChangeOk}
							footer={null}
							afterClose={() => {
								this.componentDidMount();
								console.log(data.password);
							}}
						>
							<ChangePassword cancelClick={() => this.handleChangeCancel()} okClick={() => this.handleChangeOk()} data={data} />
						</Modal>
					</Card>
				</Card>
			</div>
		);
	}
}
