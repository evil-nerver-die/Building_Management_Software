import './index.css';
import React from 'react';
import { Card, Modal, Tag, Input } from 'antd';
import SelectedPremise from './components/selectedPremise';
import { CheckCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { stores } from '../../store/storeInitializer';
import EditPremise from './components/editPremise';

const { Search } = Input;

let data = [];

export default class Premise extends React.Component {
	constructor(prop) {
		super(prop);
		this.state = {
			isLoad: false,
			isDesModalVisible: false,
			isEditModalVisible: false
		};
	}

	selectedPremiseId = -1;

	async componentDidMount() {
		await this.getAllPremise();
		data = stores.premiseStore.premiseListResult;
		this.setState({ isLoad: true });
	}

	getAllPremise = async () => {
		await stores.premiseStore.getAll();
	};

	onSearch = value => {
		console.log(value);
	};

	toggleInfoModal = id => {
		this.selectedPremiseId = id;
		this.setState({ isDesModalVisible: true });
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
		this.setState({ isEditModalVisible: false });
	};

	render() {
		return (
			<React.Fragment>
				<Card
					className="premise-container"
					title={<Search placeholder="Nhập từ khóa" onSearch={this.onSearch} enterButton style={{ width: '35vw' }} className={'card-title'} />}
					style={{ height: '100vh', width: '100vw' }}
				>
					{data.map(item => {
						return (
							<Card key={item.floor} title={'Tầng ' + item.floor}>
								{item.premises.map(prem => {
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
									title="Thông tin mặt bằng"
									visible={this.state.isDesModalVisible}
									onOk={this.handleInfoOk}
									onCancel={this.handleInfoCancel}
									cancelText={'Đóng'}
									okText={'Sửa'}
								>
									<SelectedPremise id={this.selectedPremiseId} />
								</Modal>
								<Modal
									title="Sửa mặt bằng"
									visible={this.state.isEditModalVisible}
									onOk={this.handleEditOk}
									onCancel={this.handleEditCancel}
									cancelText={'Hủy'}
									okText={'Xác nhận'}
								>
									<EditPremise id={this.selectedPremiseId} />
								</Modal>
							</Card>
						);
					})}
				</Card>
			</React.Fragment>
		);
	}
}
