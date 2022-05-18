import { ContractService } from "../service/contractService";

export class ContractStore {
    contractService;
    contractListResult = [];
    contractSelected = {};

    constructor() {
        this.contractService = new ContractService();
    }

    getAll = async () => {
        let result = await this.contractService.getAll();
        if (result !== undefined) {
            this.contractListResult = result;
        }
    };

    getById = async id => {
        let result = await this.contractService.getById(id);
        if (result !== undefined) {
            this.contractSelected = result;
        }
    };

    deleteById = async id => {
        await this.contractService.deleteById(id);
    };

    createUpdate = async data => {
        await this.contractService.createUpdate(data);
    };
}