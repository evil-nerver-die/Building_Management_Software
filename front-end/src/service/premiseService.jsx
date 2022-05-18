import axios from 'axios';

export class PremiseService {
	baseUrl = '';
	apiConfig = {};
	id = -1;

	constructor() {
		this.baseUrl = 'https://vast-badlands-46030.herokuapp.com/https://bms-1.herokuapp.com/';
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

	deleteById(id) {
		let url_ = this.baseUrl + '/api/premises/' + id; //api xoa mat bang theo id
		axios.delete(url_).catch(function (error) {
			console.log(error);
		});
	}

	create_update(data) {
		let url_ = this.baseUrl + '/api/premises/reserve/'; //api tao mat bang moi
		axios
			.post(url_, data)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}
}
