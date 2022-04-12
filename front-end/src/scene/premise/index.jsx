import './index.css';

import React, { useState } from 'react';
import { Card, Modal, Tag } from 'antd';
import SelectedPremise from './components/selectedPremise';
import EditPremise from './components/editPremise';
import { CheckCircleOutlined, SyncOutlined } from '@ant-design/icons';
const data = [
	{
		floor: 1,
		premises: [
			{ name: 'Phong khach', area: 123231, floor: 1, num: 1, status: true, disable: false, price: 2312321, des: 'Tiep khach cac thu', id: 1 }
		]
	},
	{
		floor: 2,
		premises: [
			{ name: 'Le tan', area: 3213, floor: 2, num: 1, status: true, disable: false, price: 23123, des: 'De may em le tan nhieu nuoc', id: 2 },
			{ name: 'Ke toan', area: 321321, floor: 2, num: 2, status: true, disable: false, price: 5343, des: 'Tien it doi hit hang thom', id: 3 }
		]
	},
	{
		floor: 3,
		premises: [
			{ name: 'Gaming', area: 3213, floor: 3, num: 1, status: true, disable: false, price: 23123, des: 'Choi game cac thu', id: 4 },
			{ name: 'Thu ky', area: 321321, floor: 3, num: 2, status: true, disable: false, price: 5343, des: 'Khong co viec thi lam thu ky', id: 5 },
			{ name: 'Dich vu', area: 3213, floor: 3, num: 3, status: false, disable: false, price: 23123, des: 'An banh tra tien', id: 6 },
			{ name: 'Dev', area: 321321, floor: 3, num: 4, status: true, disable: false, price: 5343, des: 'Code cac thu', id: 7 }
		]
	}
];

const seletedPremise = {
	name: 'Thu ky',
	area: 321321,
	floor: 3,
	num: 2,
	price: 5343,
	des: 'Khong co viec thi lam thu ky',
	id: 5
};
const Premise = () => {
	const [isDesModalVisible, setIsDesModalVisible] = useState(false);
	const [isEditModalVisible, setIsEditModalVisible] = useState(false);

	const toggleInfoModal = () => {
		setIsDesModalVisible(true);
	};

	const handleInfoOk = () => {
		setIsDesModalVisible(false);
		setIsEditModalVisible(true);
	};
	const handleEditOk = () => {
		setIsEditModalVisible(false);
	};

	const handleInfoCancel = () => {
		setIsDesModalVisible(false);
	};
	const handleEditCancel = () => {
		setIsEditModalVisible(false);
	};

	return (
		<React.Fragment>
			<Card title="Mặt bằng" style={{ height: '100vh', width: '100vw' }}>
				{data.map(item => {
					return (
						<Card title={'Tầng ' + item.floor}>
							{item.premises.map(prem => {
								return (
									<Tag style={{ cursor: 'pointer' }} onClick={toggleInfoModal} color={prem.status === true ? 'success' : 'default'}>
										{prem.num.toString() + ' '}
										{prem.status === true ? <CheckCircleOutlined /> : <SyncOutlined />}
									</Tag>
								);
							})}
							<Modal
								title="Thông tin mặt bằng"
								visible={isDesModalVisible}
								onOk={handleInfoOk}
								onCancel={handleInfoCancel}
								cancelText={'Đóng'}
								okText={'Sửa'}
							>
								<SelectedPremise premise={seletedPremise} />
							</Modal>
							<Modal
								title="Sửa mặt bằng"
								visible={isEditModalVisible}
								onOk={handleEditOk}
								onCancel={handleEditCancel}
								cancelText={'Hủy'}
								okText={'Xác nhận'}
							>
								<EditPremise premise={seletedPremise} />
							</Modal>
						</Card>
					);
				})}
			</Card>
		</React.Fragment>
	);
};

export default Premise;
