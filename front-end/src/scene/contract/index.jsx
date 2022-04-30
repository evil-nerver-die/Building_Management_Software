import './index.css'

import React,{ useState } from 'react';
import * as ReactDOM from 'react-dom';
import { Col, Modal, Table, Space, Input, Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { stores } from '../../store/storeInitializer';
import EditContract from './components/editContract';
import SelectedContract from './components/selectedContract';

const { Search } = Input;

let data = [];

export default class Contract extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            isLoad: false,
            isDesModalVisible: false,
			isEditModalVisible: false
        };
    }

    selectedContractId = -1;

    async componentDidMount() {
        await this.getAllContract();
        data = stores.contractStore.contractListResult;
        this.setState({ isLoaded: true });
    }

    getAllContract = async () => {
        await stores.contractStore.getAll();
    };

    onSearch = value => {
        console.log(value);
    };

    toggleInfoModal = id => {
		this.selectedContractId = id;
        console.log(id);
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
                <Table dataSource={data} rowKey={"id"}>
                    <Col title="Tên Hợp Đồng" dataIndex="name" key="name" />
                    <Col title="Code" dataIndex="code" key="code" />
                    <Col title="Ngày tạo " dataIndex="dateCreated" key="dateCreated" />
                    <Col 
                        title="Lựa chọn"
                        key="option"
                        render={(text) =>(
                            <Space size={'middle'}>
                                <Button 
                                    type='primary' 
                                    onClick={this.toggleInfoModal}
                                >
                                    Thông tin <InfoCircleOutlined />
                                </Button>
                            </Space>
                        )} 
                    />
                    
                </Table>
                <Modal
                    title="Thông tin hợp đồng"
                    visible={this.state.isDesModalVisible}
                    onOk={this.handleInfoOk}
                    onCancel={this.handleInfoCancel}
                    cancelText={'Đóng'}
                    okText={'Sửa'}
                >
                    <SelectedContract id={this.selectedContractId} />
                </Modal>
                <Modal
                    title="Yêu cầu sửa hợp đồng"
                    visible={this.state.isEditModalVisible}
                    onOk={this.handleEditOk}
                    onCancel={this.handleEditCancel}
                    cancelText={'Hủy'}
                    okText={'Xác Nhận'}
                >
                    <EditContract id={this.selectedContractId} />
                </Modal>
            </React.Fragment>
        );
    }
}
