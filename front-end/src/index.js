import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './scene/home';
import Premise from './scene/premise';
import Customer from './scene/customer';
import Account from './scene/account';

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<Routes>
				<Route path="/" element={<App />}>
					{/* Đổi tên element component sau khi code xong scene */}
					<Route path="/home" element={<Home />} />
					<Route path="/premise" element={<Premise />} />
					<Route path="/contract" element={<App />} />
					<Route path="/service" element={<App />} />
					<Route path="/customer" element={<Customer />} />
					<Route path="/employee" element={<App />} />
					<Route path="/account" element={<Account />} />
				</Route>
			</Routes>
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
