import './index.css';

import { Table, Space, Button, Popconfirm, Modal } from 'antd';
// import { Image } from 'antd';
import { EditFilled, DeleteFilled, FileTextFilled } from '@ant-design/icons';
import React, { useState } from 'react';
import EditService from './component/editService';
import ContractService from './component/contractService';

const { Column } = Table;

const serData = [
	{
		id: 1,
		name: 'Lap dat dieu hoa',
		code: 'AC',
		price: '5000000',
		provider: 'Dieu hoa Duc beo',
		status: true,
		des: 'Duc tho dien'
	},

	{
		id: 2,
		name: 'Nuoc uong',
		code: 'WT',
		price: '1000000',
		provider: 'Duc beo Aqua',
		status: false,
		des: 'Duc binh nuoc'
	},

	{
		id: 3,
		name: 'Thu don rac',
		code: 'GB',
		price: '500000',
		provider: 'Duc beo lao cong',
		status: false,
		des: 'Duc don rac'
	},

	{
		id: 4,
		name: 'Dich vu Internet',
		code: 'IN',
		price: '3000000',
		provider: 'Duc beo vien thong',
		status: true,
		des: 'Duc lap mang'
	},

	{
		id: 5,
		name: 'Noi that',
		code: 'FU',
		price: '30000000',
		provider: 'Ban ghe Duc beo',
		status: false,
		des: 'Duc tho moc'
	}
];

const testedSerData = {
	id: 1,
	name: 'Lap dat dieu hoa',
	code: 'AC',
	price: '5000000',
	provider: 'Dieu hoa Duc beo',
	status: true,
	des: 'Duc tho dien'
};

const Service = () => {
	const [isEditModalVisible, setIsEditModalVisible] = useState(false);
	const [isConModalVisible, setIsConModalVisible] = useState(false);

	const toggleInfoModal = () => {
		setIsConModalVisible(true);
	};
	const handleInfoOk = () => {
		setIsConModalVisible(false);
	};
	const handleInfoCancel = () => {
		setIsConModalVisible(false);
	};
	const toggleEditModal = () => {
		setIsEditModalVisible(true);
	};
	const handleEditOk = () => {
		setIsEditModalVisible(false);
	};
	const handleEditCancel = () => {
		setIsEditModalVisible(false);
	};

	const confirm = () =>
		new Promise(resolve => {
			setTimeout(() => resolve(), 1000);
		});
	// return (
	// 	<React.Fragment>
	// 		{
	// 			serData.map(
	// 				item => {
	// 					return (
	// 						// <div className="site-card-wrapper">
	// 						// 	<Card title={item.name} bordered={true}>
	// 						// 		<Image
	// 						// 			width={200}
	// 						// 			src={require('./image/ac-ser.jpg')}
	// 						// 		/>
	// 						// 		<Table>
	// 						// 			<Column title={'Mã dịch vụ'} dataIndex={item.code}/>
	// 						// 		</Table>
	// 						// 	</Card>
	// 						// </div>
	// 					)
	// 				}
	// 			)
	// 		}
	//   </React.Fragment>
	// );

	return (
		<React.Fragment>
			<Table dataSource={serData}>
				<Column title="Tên dịch vụ" dataIndex="name" key="name" />
				<Column title="Mã dịch vụ" dataIndex="code" key="code" />
				<Column title="Giá tiền" dataIndex="price" key="price" />
				<Column title="Bên cung cấp" dataIndex="provider" key="provider" />
				<Column 
					title="Tình trạng" 
					dataIndex="status" 
					key="status"
					render={(status)=>(
						<>{status === true ? 'Có':'Không'}</>
					)} 
				/>
				<Column title="Thông tin chi tiết" dataIndex="des" key="des" />
				<Column
					title="Lựa chọn"
					key="option"
					render={text => (
						<Space size="middle">
							<Button type="primary" onClick={toggleEditModal}>
								Sửa <EditFilled />
							</Button>
							<Button type="primary" onClick={toggleInfoModal}>
								Thuê <FileTextFilled />
							</Button>
							<Popconfirm title="Bạn chắc chắn muốn xóa" onConfirm={confirm} onVisibleChange={() => console.log('visible change')}>
								<Button type="primary" danger>
									Xóa <DeleteFilled />
								</Button>
							</Popconfirm>
						</Space>
					)}
				/>
			</Table>
			<Modal
				title="Sửa thông tin dịch vụ"
				visible={isEditModalVisible}
				onOk={handleEditOk}
				onCancel={handleEditCancel}
				okText={'Lưu'}
				cancelText={'Hủy'}
			>
				<EditService service={testedSerData} />
			</Modal>

			<Modal
				title="Hợp đồng dịch vụ"
				visible={isConModalVisible}
				onOk={handleInfoOk}
				onCancel={handleInfoCancel}
				okText={'Xác nhận'}
				cancelText={'Hủy'}
			>
				<ContractService service={testedSerData} />
			</Modal>
		</React.Fragment>
	);
};

export default Service;