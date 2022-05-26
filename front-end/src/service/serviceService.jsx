import axios from 'axios';

export class ServiceService {
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
		let url_ = this.baseUrl + 'api/services/';

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
		let url_ = this.baseUrl + 'api/services/' + id;
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
		let url_ = this.baseUrl + 'api/services/' + id;
		axios.delete(url_, this.apiConfig).catch(function (error) {
			console.log(error);
		});
	}

	add_update(data) {
		let url_ = this.baseUrl + 'api/services/reserve/';
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
