import { Table, Space, Button, Popconfirm, Modal } from 'antd';
import React from 'react';
import { useState } from 'react';
import { /*EditFilled,*/ DeleteFilled, InfoCircleFilled } from '@ant-design/icons';
import EditEmployee from './component/editEmployee';
import InforEmployee from './component/inforEmployee';

const { Column } = Table;

const employeeData = [
	{
		id: 1,
		name: 'Long gay',
		dob: 30,
		email: 'abc@xyz.com',
		phone: '0123456789',
		gender: true,
		des: 'Nothing to mention'
	},
	{
		id: 2,
		name: 'Tuan Anh',
		dob: 25,
		email: 'abc@xyz.com',
		phone: '0123456789',
		gender: true,
		des: 'Nothing to mention'
	},
	{
		id: 3,
		name: 'Duc beo',
		dob: 23,
		email: 'abc@xyz.com',
		phone: '0123456789',
		gender: false,
		des: 'Nothing to mention'
	}
];

const testedEmployeeData = {
	id: 3,
	name: 'Duc beo',
	dob: 23,
	email: 'abc@xyz.com',
	phone: '0123456789',
	gender: false,
	des: 'Chó chăn cừu Đức, là một giống chó kích cỡ lớn, xuất xứ từ Đức. Tại Việt Nam, giống chó này được gọi là chó Berger, phiên âm từ tiếng Pháp berger cũng có nghĩa là chó chăn cừu. Chó chăn cừu Đức là một giống chó tương đối mới, từ năm 1899.'
};

const Employee = () => {
	const [isEditModalVisible, setIsEditModalVisible] = useState(false);
	const [isInfoModalVisible, setIsInfoModalVisible] = useState(false);

	const toggleInfoModal = () => {
		setIsInfoModalVisible(true);
	};
	const handleInfoOk = () => {
		setIsInfoModalVisible(false);
		setIsEditModalVisible(true);
	};
	const handleInfoCancel = () => {
		setIsInfoModalVisible(false);
	};
	// const toggleEditModal = () => {
	// 	setIsEditModalVisible(true);
	// };
	const handleEditOk = () => {
		setIsEditModalVisible(false);
	};
	const handleEditCancel = () => {
		setIsEditModalVisible(false);
		setIsInfoModalVisible(true);
	};

	const confirm = () =>
		new Promise(resolve => {
			setTimeout(() => resolve(), 1000);
		});

	return (
		<React.Fragment>
			<Table dataSource={employeeData}>
				<Column title="Tên nhân viên" dataIndex="name" key="name" />
				<Column title="Tuổi" dataIndex="dob" key="dob" />
				<Column title="Giới tính" dataIndex="gender" key="gender" render={gender => <>{gender === true ? 'Nam' : 'Nữ'}</>} />
				<Column title="Email" dataIndex="email" key="email" />
				<Column title="Điện thoại" dataIndex="phone" key="phone" />
				<Column
					title="Lựa chọn"
					key="option"
					render={text => (
						<Space size="middle">
							{/* <Button type="primary" onClick={toggleEditModal}>
								Sửa <EditFilled />
							</Button> */}
							<Button type="primary" onClick={toggleInfoModal}>
								Thông tin <InfoCircleFilled />
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
				title="Sửa thông tin nhân viên"
				visible={isEditModalVisible}
				onOk={handleEditOk}
				onCancel={handleEditCancel}
				okText="Lưu"
				cancelText="Hủy"
			>
				<EditEmployee employee={testedEmployeeData} />
			</Modal>
			<Modal
				title="Thông tin nhân viên" 
				visible={isInfoModalVisible} 
				onOk={handleInfoOk} 
				onCancel={handleInfoCancel} 
				okText="Sửa" 
				cancelText="Hủy"
			>
				<InforEmployee employee={testedEmployeeData} />
			</Modal>
		</React.Fragment>
	);
};

export default Employee;
