import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './scene/home';
import Premise from './scene/premise';
import Customer from './scene/customer';
import Account from './scene/account';
import Contract from './scene/contract';
import Service from './scene/service';
import Employee from './scene/employee';

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<Routes>
				<Route path="" element={<App />}>
					<Route index element={<Home />} />
					<Route path="/premise" element={<Premise />} />
					<Route path="/contract" element={<Contract />} />
					<Route path="/service" element={<Service />} />
					<Route path="/customer" element={<Customer />} />
					{/* <Route path="/employee" element={<Employee />} /> */}
					<Route path="/account" element={<Account />} />
				</Route>
			</Routes>
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
