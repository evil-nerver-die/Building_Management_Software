import './index.css';
import { Table, Space, Button, Popconfirm, Modal, Col, Input } from 'antd';
import { EditFilled, DeleteFilled, FileTextFilled, InfoCircleOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import EditService from './component/editService';
import ContractService from './component/contractService';
import { stores } from '../../store/storeInitializer';
import AddService from './component/addService';

const { Search } = Input;

let data = [];
let selectedServiceData = {};
let postServiceData = {};

export default class Service extends React.Component {
	constructor(prop) {
		super(prop);
		this.state = {
			isLoad: false,
			isDeleted: false,
			isDesModalVisible: false,
			isEditModalVisible: false,
			isCreateModalVisible: false
		};
	}

	selectedServiceId = -1;

	async componentDidMount() {
		await this.getAllService();
		data = stores.serviceStore.serviceListResult;
		this.setState({ isLoad: !this.state.isLoad });
		console.log(data);
	}

	async componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevState.isDeleted !== this.state.isDeleted) {
			await this.getAllService();
			data = stores.serviceStore.serviceListResult;
			this.setState({ isLoad: !this.state.isLoad });
		}
	}

	getAllService = async () => {
		await stores.serviceStore.getAll();
	};

	getServiceById = async id => {
		await stores.serviceStore.getById(id);
	};

	deleteServiceById = async () => {
		await stores.serviceStore.deleteById(this.selectedServiceId);
		this.componentDidMount();
		this.setState({ isDesModalVisible: false, isDeleted: !this.state.isDeleted });
	};

	create_update = async () => {};

	onSearch = value => {
		console.log(value);
	};

	toggleInfoModal = async id => {
		await this.getServiceById(id);
		selectedServiceData = stores.serviceStore.serviceSelected;
		this.selectedServiceId = id;
		this.setState({ isDesModalVisible: true });
	};

	toggleCreateModal = () => {
		this.setState({ isCreateModalVisible: true });
	};

	handelInfoOk = () => {
		this.setState({ isDesModalVisible: false, isEditModalVisible: true });
	};

	handelInfoCancel = () => {
		this.setState({ isDesModalVisible: false });
	};

	handleEditCancel = () => {
		this.setState({ isEditModalVisible: false });
	};

	handleEditOk = () => {
		this.componentDidMount();
		this.setState({ isEditModalVisible: false });
	};

	handleCreateCancel = () => {
		this.setState({ isCreateModalVisible: false });
	};

	handleCreateOk = () => {
		this.componentDidMount();
		this.setState({ isCreateModalVisible: false });
	};

	render() {
		return (
			<React.Fragment>
				<div className="searchBar-addBar" style={{ height: '60px' }}>
					<Search placeholder="Nhập từ khóa" onSearch={this.onSearch} enterButton style={{ width: '35vw' }} className={'card-title'} />
					<Button type={'primary'} shape={'circle'} onClick={this.toggleCreateModal}>
						<PlusOutlined />
					</Button>
				</div>
				<Table dataSource={data} rowKey={'id'}>
					<Col title="Tên dịch vụ" dataIndex="name" key="name" />
					<Col title="Mã dịch vụ" dataIndex="code" key="code" />
					<Col title="Giá tiền" dataIndex="price" key="price" />
					<Col title="Bên cung cấp" dataIndex="provider" key="provider" />
					<Col title="Thông tin chi tiết" dataIndex="des" key="des" />
					<Col
						title="Lựa chọn"
						key="option"
						render={(text, record) => (
							<Space size={'middle'}>
								<Button type="primary" onClick={() => this.toggleInfoModal(record.id)}>
									<InfoCircleOutlined /> Thông tin
								</Button>
							</Space>
						)}
					/>
				</Table>
				<Modal
					afterClose={() => this.componentDidMount()}
					title="Thông tin dịch vụ"
					visible={this.state.isDesModalVisible}
					// onOk={this.handelInfoOk}
					onCancel={this.handelInfoCancel}
					//cancelText={'Đóng'}
					// okText={'Sửa'}
					footer={null}
				>
					<ContractService
						id={this.selectedServiceId}
						data={selectedServiceData}
						okClick={() => this.handelInfoOk()}
						closeClick={() => this.deleteServiceById()}
					/>
				</Modal>
				<Modal
					afterClose={() => this.componentDidMount()}
					title="Sửa dịch vụ"
					visible={this.state.isEditModalVisible}
					//onOk={this.handleEditOk}
					onCancel={this.handleEditCancel}
					//cancelText={'Hủy'}
					//okText={'Lưu'}
					footer={null}
				>
					<EditService
						id={this.selectedServiceId}
						data={selectedServiceData}
						okClick={() => this.handleEditOk()}
						cancelClick={() => this.handleEditCancel}
					/>
				</Modal>
				<Modal
					afterClose={() => this.componentDidMount()}
					title="Thêm dịch vụ"
					visible={this.state.isCreateModalVisible}
					onCancel={this.handleCreateCancel}
					footer={null}
				>
					<AddService okClick={() => this.handleCreateOk()} cancelClick={() => this.handleCreateCancel} />
				</Modal>
			</React.Fragment>
		);
	}
}
// const { Column } = Table;

// const serData = [
// 	{
// 		id: 1,
// 		name: 'Lap dat dieu hoa',
// 		code: 'AC',
// 		price: '5000000',
// 		provider: 'Dieu hoa Duc beo',
// 		status: true,
// 		des: 'Duc tho dien'
// 	},

// 	{
// 		id: 2,
// 		name: 'Nuoc uong',
// 		code: 'WT',
// 		price: '1000000',
// 		provider: 'Duc beo Aqua',
// 		status: false,
// 		des: 'Duc binh nuoc'
// 	},

// 	{
// 		id: 3,
// 		name: 'Thu don rac',
// 		code: 'GB',
// 		price: '500000',
// 		provider: 'Duc beo lao cong',
// 		status: false,
// 		des: 'Duc don rac'
// 	},

// 	{
// 		id: 4,
// 		name: 'Dich vu Internet',
// 		code: 'IN',
// 		price: '3000000',
// 		provider: 'Duc beo vien thong',
// 		status: true,
// 		des: 'Duc lap mang'
// 	},

// 	{
// 		id: 5,
// 		name: 'Noi that',
// 		code: 'FU',
// 		price: '30000000',
// 		provider: 'Ban ghe Duc beo',
// 		status: false,
// 		des: 'Duc tho moc'
// 	}
// ];

// const testedSerData = {
// 	id: 1,
// 	name: 'Lap dat dieu hoa',
// 	code: 'AC',
// 	price: '5000000',
// 	provider: 'Dieu hoa Duc beo',
// 	status: true,
// 	des: 'Duc tho dien'
// };

// const Service = () => {
// 	const [isEditModalVisible, setIsEditModalVisible] = useState(false);
// 	const [isConModalVisible, setIsConModalVisible] = useState(false);

// 	const toggleInfoModal = () => {
// 		setIsConModalVisible(true);
// 	};
// 	const handleInfoOk = () => {
// 		setIsConModalVisible(false);
// 	};
// 	const handleInfoCancel = () => {
// 		setIsConModalVisible(false);
// 	};
// 	const toggleEditModal = () => {
// 		setIsEditModalVisible(true);
// 	};
// 	const handleEditOk = () => {
// 		setIsEditModalVisible(false);
// 	};
// 	const handleEditCancel = () => {
// 		setIsEditModalVisible(false);
// 	};

// 	const confirm = () =>
// 		new Promise(resolve => {
// 			setTimeout(() => resolve(), 1000);
// 		});
// 	// return (
// 	// 	<React.Fragment>
// 	// 		{
// 	// 			serData.map(
// 	// 				item => {
// 	// 					return (
// 	// 						// <div className="site-card-wrapper">
// 	// 						// 	<Card title={item.name} bordered={true}>
// 	// 						// 		<Image
// 	// 						// 			width={200}
// 	// 						// 			src={require('./image/ac-ser.jpg')}
// 	// 						// 		/>
// 	// 						// 		<Table>
// 	// 						// 			<Column title={'Mã dịch vụ'} dataIndex={item.code}/>
// 	// 						// 		</Table>
// 	// 						// 	</Card>
// 	// 						// </div>
// 	// 					)
// 	// 				}
// 	// 			)
// 	// 		}
// 	//   </React.Fragment>
// 	// );

// 	return (
// 		<React.Fragment>
// 			<Table dataSource={serData}>
// 				<Column title="Tên dịch vụ" dataIndex="name" key="name" />
// 				<Column title="Mã dịch vụ" dataIndex="code" key="code" />
// 				<Column title="Giá tiền" dataIndex="price" key="price" />
// 				<Column title="Bên cung cấp" dataIndex="provider" key="provider" />
// 				<Column
// 					title="Tình trạng"
// 					dataIndex="status"
// 					key="status"
// 					render={(status)=>(
// 						<>{status === true ? 'Có':'Không'}</>
// 					)}
// 				/>
// 				<Column title="Thông tin chi tiết" dataIndex="des" key="des" />
// 				<Column
// 					title="Lựa chọn"
// 					key="option"
// 					render={text => (
// 						<Space size="middle">
// 							<Button type="primary" onClick={toggleEditModal}>
// 								Sửa <EditFilled />
// 							</Button>
// 							<Button type="primary" onClick={toggleInfoModal}>
// 								Thuê <FileTextFilled />
// 							</Button>
// 							<Popconfirm title="Bạn chắc chắn muốn xóa" onConfirm={confirm} onVisibleChange={() => console.log('visible change')}>
// 								<Button type="primary" danger>
// 									Xóa <DeleteFilled />
// 								</Button>
// 							</Popconfirm>
// 						</Space>
// 					)}
// 				/>
// 			</Table>
// 			<Modal
// 				title="Sửa thông tin dịch vụ"
// 				visible={isEditModalVisible}
// 				onOk={handleEditOk}
// 				onCancel={handleEditCancel}
// 				okText={'Lưu'}
// 				cancelText={'Hủy'}
// 			>
// 				<EditService service={testedSerData} />
// 			</Modal>

// 			<Modal
// 				title="Hợp đồng dịch vụ"
// 				visible={isConModalVisible}
// 				onOk={handleInfoOk}
// 				onCancel={handleInfoCancel}
// 				okText={'Xác nhận'}
// 				cancelText={'Hủy'}
// 			>
// 				<ContractService service={testedSerData} />
// 			</Modal>
// 		</React.Fragment>
// 	);
// };

// export default Service;
