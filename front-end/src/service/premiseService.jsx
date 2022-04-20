import axios from 'axios';

export class PremiseService {
	baseUrl = '';
	apiConfig = {};
	id = -1;

	constructor() {
		this.baseUrl = 'http://localhost:8080';
	}

	getAll() {
		let url_ = this.baseUrl + '/api/premises'; //api goi toan bo data cac mat bang
		// let options_ = {
		// 	method: 'GET',
		// 	url: url_,
		// 	headers: {
		// 		Accept: 'application/json'
		// 	}
		// };

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

	getById(id) {
		let url_ = this.baseUrl + '/api/premises/' + id; //api goi data mat bang theo id
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
}
