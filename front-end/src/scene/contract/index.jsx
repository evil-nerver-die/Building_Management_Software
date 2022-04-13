import './index.css'

import React from 'react';
import { Card, Modal, Table, Tag } from 'antd';
import { CheckCircleOutlined, SyncOutlined } from '@ant-design/icons';

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

const selectedContract = {}

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

const columnsUser = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a onClick={toggleInfoModal} >{text}</a>
    },
    {
        title: 'Code',
        dataIndex: 'code',
        key: 'code'
    },
    {
        title: 'Date created',
        dataIndex: 'datecreated',
        key: 'datecreated'
    },
];


const Contract = () => {
    return(
        <React.Fragment>
            <Table columns={columnsUser} dataSource={data} />
            <Modal
                title="Contract Information"
                visible={isDesModalVisible}
                onOk={handleInfoOk}
                onCancel={handleInfoCancel}
                cancelText={'Close'}
                okText={'Edit'}
            >
                <SelectedContract contract={selectedContract} />
            </Modal>
        </React.Fragment>
    )
}

export default Contract