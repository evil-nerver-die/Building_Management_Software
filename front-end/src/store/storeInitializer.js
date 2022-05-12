import { PremiseStore } from './premiseStore';
import { CustomerStore } from './customerStore';
import { ContractStore } from './contractStore';

const storeInitializer = () => {
	return {
		//import va viet cac store xuong duoi
		premiseStore: new PremiseStore(),
		customerStore: new CustomerStore(),
		contractStore: new ContractStore()
	};
};

export const stores = storeInitializer();
