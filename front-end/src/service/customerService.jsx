import axios from 'axios';

export class CustomerService {
	baseUrl = '';
	apiConfig = {};
	id = -1;

	constructor() {
		this.baseUrl = 'https://bms-2.herokuapp.com:443/';
	}

	getAll() {
		let url_ = this.baseUrl + 'api/customer';

		let data = axios
			.get(url_, {
				auth: {
					username: 'admin',
					password: 'password'
				}
			})
			.then(function (response) {
				return response.data;
			})
			.catch(function (error) {
				console.log(error);
			});
		return data;
	}
}
