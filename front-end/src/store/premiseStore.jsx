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
}
