import './index.css'

import React,{ useState } from 'react';
import * as ReactDOM from 'react-dom';
import { Col, Modal, Table, Space, Input, Button } from 'antd';
import { InfoCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { stores } from '../../store/storeInitializer';
import EditContract from './components/editContract';
import SelectedContract from './components/selectedContract';
import CreateContract from './components/createContract';

const { Search } = Input;

let data = [];
let selectedContractData = [];
let postContractData = [];

export default class Contract extends React.Component {
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

    selectedContractId = -1;

    async componentDidMount() {
        await this.getAllContract();
        data = stores.contractStore.contractListResult;
        this.setState({ isLoad: !this.state.isLoad });
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isDeleted !== this.state.isDelete){
            await this.getAllContract();
            data = stores.contractStore.contractListResult;
            this.setState({ isLoad: !this.state.isLoad});
        }
    }

    getAllContract = async () => {
        await stores.contractStore.getAll();
    };

    getContractById = async id => {
        await stores.contractStore.getById(id);
    };

    deleteContractById = async () => {
        await stores.contractStore.deleteById(this.selectedContractId);
        this.componentDidMount();
        this.setState({isDesModalVisible: false, isDeleted: !this.state.isDeleted});
    };

    updateContract = async () => {};

    onSearch = value => {
        console.log(value);
    };

    toggleInfoModal = async id => {
        await this.getContractById(id);
        selectedContractData = stores.contractStore.contractSelected;
		this.selectedContractId = id;
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

    render() {
        return (
            <React.Fragment>
                <div className="searchBar-addBar" style={{ height: '60px' }}>
                    <Search placeholder="Nhập từ khóa" onSearch={this.onSearch} enterButton style={{ width: '35vw' }} className={'card-title'} />
                    <Button type={'primary'} shape={'circle'} onClick={this.toggleCreateModal}>
                        <PlusOutlined />
                    </Button>
                </div>
                <Table dataSource={data} rowKey={"id"}>
                    <Col title="Tên Hợp Đồng" dataIndex="name" key="name" />
                    <Col title="Code" dataIndex="code" key="code" />
                    <Col title="Ngày tạo " dataIndex="dateCreated" key="dateCreated" />
                    <Col 
                        title="Lựa chọn"
                        key="option"
                        render={(text, record) =>(
                            <Space size={'middle'}>
                                <Button 
                                    type='primary' 
                                    onClick= {() => this.toggleInfoModal(record.id)}
                                >
                                    <InfoCircleOutlined /> Thông tin 
                                </Button>
                            </Space>
                        )} 
                    />
                    
                </Table>
                <Modal
                    title="Thông tin hợp đồng"
                    visible={this.state.isDesModalVisible}
                    onCancel={this.handleInfoCancel}
                    footer={null}
                >
                    <SelectedContract 
                        id={this.selectedContractId}
                        data={selectedContractData}
                        okClick={() => this.handleInfoOk()}
                        cancelClick={() => this.deleteContractById()}
                    />
                </Modal>
                <Modal
                    title="Sửa hợp đồng"
                    visible={this.state.isEditModalVisible}
                    onCancel={this.handleEditCancel}
                    footer={null}
                >
                    <EditContract 
                        id={this.selectedContractId}
                        data={selectedContractData} 
                        okClick={() => this.handleEditOk()}
						cancelClick={() => this.handleEditCancel()}
                    />
                </Modal>
                <Modal 
                    title="Thêm mới hợp đồng" 
                    visible={this.state.isCreateModalVisible} 
                    onCancel={this.handleCreateCancel} 
                    footer={null}
                >
                    <CreateContract okClick={() => this.handleCreateOk()} cancelClick={() => this.handleCreateCancel()} />
                </Modal>
            </React.Fragment>
        );
    }
}
