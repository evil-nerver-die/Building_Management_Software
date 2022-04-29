import { CustomerService } from "../service/customerService";

export class CustomerStore {
    customerService;
    customerListResult = [];

    constructor() {
        this.customerService = new CustomerService();
    }

    getAll = async () => {
        let result = await this.customerService.getAll();
        if (result !== undefined) {
            this.customerListResult = result;
        }
    };

}