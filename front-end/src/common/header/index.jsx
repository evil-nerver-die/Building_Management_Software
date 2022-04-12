import { Menu } from 'antd';
import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const AppHeader = () => {
	return (
		<React.Fragment className="container-fluid">
			<div className="header">
				<div className="logo">
					<HomeOutlined />
					<Link to="./" style={{ marginLeft: '10px' }}>
						Wayne Enterprise
					</Link>
				</div>
				<Menu mode="horizontal" defaultSelectedKeys={['1']}>
					<Menu.Item key={'1'}>
						<Link to={'/home'}>Trang Chủ</Link>
					</Menu.Item>
					<Menu.Item key={'2'}>
						<Link to={'/premise'}>Mặt Bằng</Link>
					</Menu.Item>
					<Menu.Item key={'3'}>
						<Link to={'/contract'}>Hợp Đồng</Link>
					</Menu.Item>
					<Menu.Item key={'4'}>
						<Link to={'/service'}>Dịch Vụ</Link>
					</Menu.Item>
					<Menu.Item key={'5'}>
						<Link to={'/customer'}>Khách Hàng</Link>
					</Menu.Item>
					<Menu.Item key={'6'}>
						<Link to={'/employee'}>Nhân viên</Link>
					</Menu.Item>
					<Menu.Item key={'7'}>
						<Link to={'/account'}>Tài Khoản</Link>
					</Menu.Item>
				</Menu>
			</div>
		</React.Fragment>
	);
};

export default AppHeader;
