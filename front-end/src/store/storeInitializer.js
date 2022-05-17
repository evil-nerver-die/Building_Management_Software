import { PremiseStore } from './premiseStore';
import { CustomerStore } from './customerStore';
import { ContractStore } from './contractStore';
import { ServiceStore } from './serviceStore';

const storeInitializer = () => {
	return {
		//import va viet cac store xuong duoi
		premiseStore: new PremiseStore(),
		customerStore: new CustomerStore(),
		contractStore: new ContractStore(),
		serviceStore: new ServiceStore()
	};
};

export const stores = storeInitializer();
