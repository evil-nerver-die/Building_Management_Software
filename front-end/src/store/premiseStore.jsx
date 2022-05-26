import { PremiseService } from '../service/premiseService';

export class PremiseStore {
	premiseService;
	premiseListResult = [];
	premiseSelected = {};

	constructor() {
		this.premiseService = new PremiseService();
	}

	getAll = async () => {
		let result = await this.premiseService.getAll();
		if (result !== undefined) {
			this.premiseListResult = result;
		}
	};

	getById = async id => {
		let result = await this.premiseService.getById(id);
		if (result !== undefined) {
			this.premiseSelected = result;
		}
	};

	deleteById = async id => {
		await this.premiseService.deleteById(id);
	};

	create_update = async data => {
		await this.premiseService.create_update(data);
	};

	rent = async id => {
		await this.premiseService.rent(id);
	};

	checkout = async id => {
		await this.premiseService.checkout(id);
	};
}
