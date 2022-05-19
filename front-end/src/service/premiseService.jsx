import axios from 'axios';

export class PremiseService {
	baseUrl = '';
	apiConfig = {};
	id = -1;

	constructor() {
		this.baseUrl = 'https://bms-2.herokuapp.com:443/';
	}

	getAll() {
		let url_ = this.baseUrl + 'api/premises'; //api goi toan bo data cac mat bang

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
		let url_ = this.baseUrl + 'api/premises/' + id; //api goi data mat bang theo id
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
		let url_ = this.baseUrl + 'api/premises/' + id; //api xoa mat bang theo id
		axios.delete(url_).catch(function (error) {
			console.log(error);
		});
	}

	create_update(data) {
		let url_ = this.baseUrl + 'api/premises/reserve'; //api tao mat bang moi
		axios.post(url_, data).catch(function (error) {
			console.log(error);
		});
	}

	rent(id) {
		let url_ = this.baseUrl + 'api/premises/rent'; //api thue mat bang
		let data = {
			id: id
		};
		axios.post(url_, data).catch(function (error) {
			console.log(error);
		});
	}

	checkout(id) {
		let url_ = this.baseUrl + 'api/premises/checkout'; //api ngung thue mat bang
		console.log(url_);
		let data = {
			id: id
		};
		axios.post(url_, data).catch(function (error) {
			console.log(error);
		});
	}
}
