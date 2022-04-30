import './index.css'

import React,{ useState } from 'react';
import * as ReactDOM from 'react-dom';
import { Card, Col, Modal, Table, Space, Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { stores } from '../../store/storeInitializer';
import EditContract from './components/editContract';

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
                <Table dataSource={data} rowKey={"id"}>

                </Table>
            </React.Fragment>
        );
    }
}
