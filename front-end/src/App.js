import React from 'react';
import { Layout } from 'antd';
import AppHeader from './common/header';
import 'antd/dist/antd.css';
import './App.css';
import { Outlet } from 'react-router';
import AppFooter from './common/footer/footer';

const { Header, Content, Footer } = Layout;

const App = () => {
	return (
		<React.Fragment>
			<Layout className="mainLayout">
				<Header>
					<AppHeader />
				</Header>
				<Content>
					<Outlet />
				</Content>
				<Footer>
					<AppFooter />
				</Footer>
			</Layout>
		</React.Fragment>
	);
};

export default App;
