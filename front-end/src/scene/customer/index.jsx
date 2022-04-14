import './index.css';

import React from 'react';
import { Table, Tag, Space } from 'antd';

const { Columns } = Table;

const data = [
  {
    key: '1',
    name: 'John Brown',
    dob: 32,
    phone: 'New York No. 1 Lake Park',
    email: 'lol',
    gender: true,
  },
  {
    key: '2',
    name: 'Duc Beo',
    dob: 32,
    phone: 'New York No. 1 Lake Park',
    email: 'lol',
    gender: true,
  },
  {
    key: '3',
    name: 'Mia Kalifax',
    dob: 32,
    phone: 'New York No. 1 Lake Park',
    email: 'lol',
    gender: false,
  },
];

const Customer = () => {
  return (
    <React.Fragment>
      <Table dataSource={data}>
            <Columns title="Name" dataIndex="name" key="name" />
            <Columns title="Date of birth" dataIndex="dob" key="dob" />
            <Columns 
                title="Gender" 
                dataIndex="name" 
                key="name"
                render={(gender)=>(
                    <>{gender === true ? 'Male':'Female'}</>
                )}
            />
            <Columns title="Phone" dataIndex="phone" key="phone" />
            <Columns title="Email" dataIndex="email" key="email" />
      </Table>
    </React.Fragment>
  )
}

export default Customer