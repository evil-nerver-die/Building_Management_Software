import './index.css';

import React from 'react';
import { Table, Col, Input } from 'antd';
import { stores } from '../../store/storeInitializer';

const { Search } = Input;

let data = [];

export default class Customer extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            isLoad: false
        };
    }

    selectedCustomerId = -1;

    async componentDidMount() {
        await this.getAllCustomer();
        data = stores.customerStore.customerListResult;
        this.setState({ isLoad: true });
    }

    getAllCustomer = async () => {
        await stores.customerStore.getAll();
    };

    onSearch = value => {
        console.log(value);
    };

    render() {
        return (
            <React.Fragment>
                <Table dataSource={data} rowKey={"id"} >
                    <Col title="Tên Khách Hàng" dataIndex="name" key="name" />
                    <Col title="Ngày Sinh" dataIndex="dob" key="dob" />
                    <Col 
                        title="Giới Tính" 
                        dataIndex="gender" 
                        key="gender"
                        render={(gender)=>(
                            <>{gender === true ? 'Male':'Female'}</>
                        )}
                     />
                    <Col title="Điện thoại" dataIndex="phone" key="phone" />
                    <Col title="Email" dataIndex="email" key="email" />
                </Table>
            </React.Fragment>
        );
    }
}