import { Button, Card, Modal, Space } from 'antd';
import React, { useState } from 'react';
import EditAccount from './components/editAccount';
import ChangePassword from './components/changePassword';
import './index.css';

const data = {
	name: 'Đức béo',
	dob: '16/10/2000',
	email: 'taquangduc_t63@hus.edu.vn',
	phone: '0969940xx',
	gender: true,
	file: 'ava.jpg'
};

const Account = () => {
	const [isShowEdit, setIsShowEdit] = useState(false);
	const [isShowChange, setIsShowChange] = useState(false);

	const toggleEdit = () => {
		setIsShowEdit(true);
	};
	const togglechange = () => {
		setIsShowChange(true);
	};
	const handleEditOk = () => {
		setIsShowEdit(false);
	};
	const handleEditCancel = () => {
		setIsShowEdit(false);
	};
	const handleChangeOk = () => {
		setIsShowChange(false);
	};
	const handleChangeCancel = () => {
		setIsShowChange(false);
	};
	return (
		<React.Fragment className="account">
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
							<Button type="primary" onClick={toggleEdit}>
								Sửa
							</Button>
							<Button type="primary" danger onClick={togglechange}>
								Đổi mật khẩu
							</Button>
						</Space>
					</div>
					<Modal title={'Sửa thông tin'} visible={isShowEdit} onCancel={handleEditCancel} onOk={handleEditOk} okText={'Sửa'} cancelText={'Hủy'}>
						<EditAccount data={data} />
					</Modal>
					<Modal
						title={'Đổi mật khẩu'}
						visible={isShowChange}
						onCancel={handleChangeCancel}
						onOk={handleChangeOk}
						okText={'Xác nhận'}
						cancelText={'Hủy'}
					>
						<ChangePassword />
					</Modal>
				</Card>
			</Card>
		</React.Fragment>
	);
};

export default Account;
