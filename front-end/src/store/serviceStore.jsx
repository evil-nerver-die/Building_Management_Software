import { ServiceService } from '../service/serviceService';

export class ServiceStore {
	serviceService;
	serviceListResult = [];
	serviceSelected = {};

	constructor() {
		this.serviceService = new ServiceService();
	}

	getAll = async () => {
		let result = await this.serviceService.getAll();
		if (result !== undefined) {
			this.serviceListResult = result;
		}
	};

	getById = async id => {
		let result = await this.serviceService.getById(id);
		if (result !== undefined) {
			this.serviceSelected = result;
		}
	};
}
