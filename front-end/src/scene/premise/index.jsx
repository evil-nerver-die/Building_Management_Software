import './index.css';
import React from 'react';
import { Card, Modal, Tag, Input, Button } from 'antd';
import SelectedPremise from './components/selectedPremise';
import { CheckCircleOutlined, PlusOutlined, SyncOutlined } from '@ant-design/icons';
import { stores } from '../../store/storeInitializer';
import EditPremise from './components/editPremise';
import CreatePremise from './components/createPremise';

const { Search } = Input;

let data = [];
let selectedPremiseData = {};

export default class Premise extends React.Component {
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

	selectedPremiseId = -1;

	async componentDidMount() {
		await this.getAllPremise();
		data = stores.premiseStore.premiseListResult;
		this.setState({ isLoad: !this.state.isLoad });
	}

	async componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevState.isDeleted !== this.state.isDeleted) {
			await this.getAllPremise();
			data = stores.premiseStore.premiseListResult;
			this.setState({ isLoad: !this.state.isLoad });
		}
	}

	getAllPremise = async () => {
		await stores.premiseStore.getAll();
	};

	getPremiseById = async id => {
		await stores.premiseStore.getById(id);
	};

	deletePremiseById = async () => {
		await stores.premiseStore.deleteById(this.selectedPremiseId);
		this.componentDidMount();
		this.setState({ isDesModalVisible: false, isDeleted: !this.state.isDeleted });
	};

	create_update = async () => {};

	onSearch = value => {
		console.log(value);
	};

	toggleInfoModal = async id => {
		await this.getPremiseById(id);
		selectedPremiseData = stores.premiseStore.premiseSelected;
		this.selectedPremiseId = id;
		this.setState({ isDesModalVisible: true });
	};

	toggleCreateModal = () => {
		this.setState({ isCreateModalVisible: true });
	};

	handleInfoOk = () => {
		this.setState({ isDesModalVisible: false, isEditModalVisible: true });
	};

	handleInfoCancel = () => {
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

	checkout = async () => {
		await stores.premiseStore.checkout(this.selectedPremiseId);
		this.componentDidMount();
		this.setState({ isDesModalVisible: false });
	};

	rent = async () => {
		await stores.premiseStore.rent(this.selectedPremiseId);
		this.componentDidMount();
		this.setState({ isDesModalVisible: false });
	};

	render() {
		return (
			<React.Fragment>
				<Card
					className="premise-container"
					title={
						<div className="searchBar-addBar">
							<Search placeholder="Nhập từ khóa" onSearch={this.onSearch} enterButton style={{ width: '35vw' }} className={'card-title'} />
							<Button type={'primary'} shape={'circle'} onClick={this.toggleCreateModal}>
								<PlusOutlined />
							</Button>
						</div>
					}
					style={{ height: '100vh', width: '100vw' }}
				>
					{data
						.filter(item => !item.premises.every(element => element.disable === false))
						.map(item => {
							return (
								<Card key={item.floor} title={'Tầng ' + item.floor}>
									{item.premises
										.filter(prem => prem.disable === true)
										.map(prem => {
											return (
												<Tag
													key={prem.id}
													style={{ cursor: 'pointer' }}
													onClick={() => {
														return this.toggleInfoModal(prem.id);
													}}
													color={prem.status === true ? 'success' : 'default'}
												>
													{prem.num.toString() + ' '}
													{prem.status === true ? <CheckCircleOutlined /> : <SyncOutlined />}
												</Tag>
											);
										})}

									<Modal
										afterClose={() => this.componentDidMount()}
										title="Thông tin mặt bằng"
										visible={this.state.isDesModalVisible}
										onCancel={this.handleInfoCancel}
										footer={null}
									>
										<SelectedPremise
											id={this.selectedPremiseId}
											data={selectedPremiseData}
											okClick={() => this.handleInfoOk()}
											closeClick={() => this.deletePremiseById()}
											rent={() => this.rent()}
											checkout={() => this.checkout()}
										/>
									</Modal>
									<Modal
										afterClose={() => this.componentDidMount()}
										title="Sửa mặt bằng"
										visible={this.state.isEditModalVisible}
										onCancel={this.handleEditCancel}
										footer={null}
									>
										<EditPremise
											id={this.selectedPremiseId}
											data={selectedPremiseData}
											okClick={() => this.handleEditOk()}
											cancelClick={() => this.handleEditCancel()}
										/>
									</Modal>
									<Modal
										afterClose={() => this.componentDidMount()}
										title="Thêm mới mặt bằng"
										visible={this.state.isCreateModalVisible}
										onCancel={this.handleCreateCancel}
										footer={null}
									>
										<CreatePremise okClick={() => this.handleCreateOk()} cancelClick={() => this.handleCreateCancel()} />
									</Modal>
								</Card>
							);
						})}
				</Card>
			</React.Fragment>
		);
	}
}
