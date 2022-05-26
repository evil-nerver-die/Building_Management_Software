import axios from 'axios';

export class CustomerService {
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

	getAll() {
		let url_ = this.baseUrl + 'api/customer';

		let data = axios
			.get(url_, this.apiConfig)
			.then(function (response) {
				return response.data;
			})
			.catch(function (error) {
				console.log(error);
			});
		return data;
	}
}
