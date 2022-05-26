import axios from 'axios';

export class LoginService {
	baseUrl = '';
	apiConfig = {};
	id = -1;

	constructor() {
		this.baseUrl = 'https://bms-2.herokuapp.com:443/';
	}

	validateInfo(data) {
		let url_ = this.baseUrl + 'api/account/login/';
		axios
			.post(url_, data, {
				auth: {
					username: 'admin',
					password: 'password'
				}
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	registerAcc(data) {
		let url_ = this.baseUrl + 'api/account/reserve/';
		axios
			.post(url_, data, {
				auth: {
					username: 'admin',
					password: 'password'
				}
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}
}
