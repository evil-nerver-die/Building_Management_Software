import { Menu, Image } from 'antd';
import React from 'react';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

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
			{console.log(sessionStorage.getItem('loggedIn'))}
			{sessionStorage.getItem('loggedIn') === null && <Navigate to="/login" replace={true} />}
			<div className="header">
				<div className="logo">
					<Link to="" style={{ marginLeft: '10px' }}>
						Wayne Enterprise
					</Link>
				</div>
				<Menu mode="horizontal" defaultSelectedKeys={[url]} style={{ width: '570px' }}>
					<Menu.Item key={'home'}>
						<Link to={''}>
							<HomeOutlined />
						</Link>
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
					{/* <Menu.Item key={'employee'}>
						<Link to={'/employee'}>Nhân viên</Link>
					</Menu.Item> */}
					<Menu.Item key={'account'}>
						<Link to={'/account'}>
							<UserOutlined />
						</Link>
					</Menu.Item>
				</Menu>
			</div>
		</div>
	);
};

export default AppHeader;
