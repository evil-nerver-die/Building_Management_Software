import axios from 'axios';

export class LoginService {
	baseUrl = '';
	apiConfig = {
		auth: {
			username: 'admin',
			password: 'password'
		}
	};
	id = -1;

	constructor() {
		this.baseUrl = 'https://bms-2.herokuapp.com/';
	}

	validateInfo(data) {
		let url_ = this.baseUrl + 'api/account/login/';
		let temp = axios
			.post(url_, data, this.apiConfig)
			.then(function (response) {
				return response.data;
			})
			.catch(function (error) {
				console.log(error);
			});

		return temp;
	}

	registerAcc(data) {
		let url_ = this.baseUrl + 'api/account/reserve/';
		axios
			.post(url_, data, this.apiConfig)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}
}
