import axios from "axios";

export class ContractService {
    baseUrl = '';
    apiConfig = {};
    id = -1;

    constructor() {
        this.baseUrl = 'http://localhost:8080/';
    }

    getAll() {
        let url_ = this.baseUrl + 'api/contract/';

        let data = axios
            .get(url_, {
							auth: {
								username: 'admin',
								password: 'password'
							}
						})
            .then(function(respond) {
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
            .get(url_)
            .then(function(respond) {
                return respond.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        return data;
    }

    deleteById(id) {
        let url_ = this.baseUrl + 'api/contract/' + id;
        axios.delete(url_).catch(function (error) {
			console.log(error);
		});
    }

    createUpdate(data) {
        let url_ = this.baseUrl +'api/contract/reserve/';
        axios
            .post(url_, data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}