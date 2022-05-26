import axios from 'axios';

export class ContractService {
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
		let url_ = this.baseUrl + 'api/contract/';

		let data = axios
			.get(url_, this.apiConfig)
			.then(function (respond) {
				return respond.data;
			})
			.catch(function (error) {
				console.log(error);
			});
		return data;
	}

	getById(id) {
		let url_ = this.baseUrl + 'api/contract/' + id;
		let data = axios
			.get(url_, this.apiConfig)
			.then(function (respond) {
				return respond.data;
			})
			.catch(function (error) {
				console.log(error);
			});
		return data;
	}

	deleteById(id) {
		let url_ = this.baseUrl + 'api/contract/' + id;
		axios.delete(url_, this.apiConfig).catch(function (error) {
			console.log(error);
		});
	}

	createUpdate(data) {
		let url_ = this.baseUrl + 'api/contract/reserve/';
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
