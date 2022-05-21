import axios from 'axios';

export class AccountService {
	baseUrl = '';

	constructor() {
		this.baseUrl = 'https://bms-2.herokuapp.com/';
	}

	getInfo() {
		let url_ = this.baseUrl + 'api/account';
		let data = axios
			.get(url_)
			.then(function (respond) {
				return respond.data;
			})
			.catch(function (error) {
				console.log(error);
			});
		return data;
	}

	updateInfo(data) {
		let url_ = this.baseUrl + 'api/account/reserve';
		axios.post(url_, data).catch(function (error) {
			console.log(error);
		});
	}

	changePassword(data) {
		let url_ = this.baseUrl + 'api/account/changePassword';
		axios.post(url_, data).catch(function (error) {
			console.log(error);
		});
	}
}
