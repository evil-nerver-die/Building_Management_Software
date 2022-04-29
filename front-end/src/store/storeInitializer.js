import { PremiseStore } from './premiseStore';
import { CustomerStore } from './customerStore';

const storeInitializer = () => {
	return {
		//import va viet cac store xuong duoi
		premiseStore: new PremiseStore(),
		customerStore: new CustomerStore
	};
};

export const stores = storeInitializer();
