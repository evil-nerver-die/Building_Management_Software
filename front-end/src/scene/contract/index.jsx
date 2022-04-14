import './index.css'

import React,{ useState } from 'react';
import * as ReactDOM from 'react-dom';
import { Card, Modal, Table, Space } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import EditContract from './components/editContract';
const { Column} = Table;

const data = [
    {
        key: '1',
        name: 'Contract B1',
        code: 'B1',
        datecreated: '2018-01-01'
    },
    {
        key: '2',
        name: 'Contract B3',
        code: 'B3',
        datecreated: '2018-01-01'
    },
    {
        key: '3',
        name: 'Contract A11',
        code: 'A11',
        datecreated: '2018-01-01'
    },
];

const selectedContract = {
    name: 'Hop dong mua Duc Beo',
    code: 'B1',
    dateEnd: '2018-01-09',
    provider: '',
    des: 'Hop dong lang nhang vcl',
    id: 3
}

const Contract = () => {
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);

    const toggleEditModal = () =>{
        setIsEditModalVisible(true);
    };
    const handleEditOk = () =>{
        setIsEditModalVisible(false);
    };
    const handleEditCancel = () =>{
        setIsEditModalVisible(false);
    };

    return (
        <React.Fragment>
            <Table dataSource={data} >
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Code" dataIndex="code" key="code" />
                <Column title="Date Created" dataIndex="datecreated" key="datecreated" />
                <Column 
                    title="Edit" 
                    key="edit"
                    render={(text) => (
                        <Space size ="middle">
                            <button onClick={toggleEditModal}>Edit <EditOutlined /></button>
                        </Space> 
                    )}    
                />
            </Table>
            <Modal
                title="Edit Contract Request"
                visible={isEditModalVisible}
                onOk={handleEditOk}
                onCancel={handleEditCancel}
                cancelText={'Cancel'}
                okText={'Confirm'}
            >
                <EditContract contract={selectedContract} />
            </Modal>
        </React.Fragment>
            
    );
    
}

export default Contract;
