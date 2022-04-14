import './index.css';

import React from 'react';
import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Date of birth',
    dataIndex: 'dob',
    key: 'dob',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    render: gender => (
      <>
        {gender === true ? 'Male' : 'Female'}
      </>
    ),

  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    dob: 32,
    phone: 'New York No. 1 Lake Park',
    email: 'lol',
    gender: true,
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Duc Beo',
    dob: 32,
    phone: 'New York No. 1 Lake Park',
    email: 'lol',
    gender: true,
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Kila Kalifax',
    dob: 32,
    phone: 'New York No. 1 Lake Park',
    email: 'lol',
    gender: false,
    tags: ['cool', 'teacher'],
  },
];

const Customer = () => {
  return (
    <React.Fragment>
      <Table columns={columns} dataSource={data} />
    </React.Fragment>
  )
}

export default Customer