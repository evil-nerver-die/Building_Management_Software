import axios from "axios";

export class ContractService {
    baseUrl = '';
    apiConfig = {};
    id = -1;

    constructor() {
        this.baseUrl = 'https://bms-2.herokuapp.com/';
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
}