import axios from "axios";

export class CustomerService {
    baseUrl = '';
    apiConfig ={};
    id = -1;

    constructor() {
        this.baseUrl ='https://bms-2.herokuapp.com/';
    }

    getAll() {
        let url_ = this.baseUrl + '/api/customer';

        let data = axios
            .get(url_)
            .then(function(response) {
                return response.data;
            })
            .catch(function(error) {
                console.log(error);
            });
        return data;
    }
}