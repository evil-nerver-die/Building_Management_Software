import { Menu } from 'antd';
import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const AppHeader = () => {
	const ref = window.location.href.split('/')[4];
	var url = 'home';

	switch (ref) {
		case 'premise':
			url = 'premise';
			break;
		case 'contract':
			url = 'contract';
			break;
		case 'service':
			url = 'service';
			break;
		case 'customer':
			url = 'customer';
			break;
		case 'employee':
			url = 'employee';
			break;
		case 'account':
			url = 'account';
			break;
		default:
			url = 'home';
			break;
	}

	return (
		<div className="container-fluid">
			<div className="header">
				<div className="logo">
					<HomeOutlined />
					<Link to="./" style={{ marginLeft: '10px' }}>
						Wayne Enterprise
					</Link>
				</div>
				<Menu mode="horizontal" defaultSelectedKeys={[url]}>
					<Menu.Item key={'home'}>
						<Link to={'/home'}>Trang Chủ</Link>
					</Menu.Item>
					<Menu.Item key={'premise'}>
						<Link to={'/premise'}>Mặt Bằng</Link>
					</Menu.Item>
					<Menu.Item key={'contract'}>
						<Link to={'/contract'}>Hợp Đồng</Link>
					</Menu.Item>
					<Menu.Item key={'service'}>
						<Link to={'/service'}>Dịch Vụ</Link>
					</Menu.Item>
					<Menu.Item key={'customer'}>
						<Link to={'/customer'}>Khách Hàng</Link>
					</Menu.Item>
					<Menu.Item key={'employee'}>
						<Link to={'/employee'}>Nhân viên</Link>
					</Menu.Item>
					<Menu.Item key={'account'}>
						<Link to={'/account'}>Tài Khoản</Link>
					</Menu.Item>
				</Menu>
			</div>
		</div>
	);
};

export default AppHeader;
