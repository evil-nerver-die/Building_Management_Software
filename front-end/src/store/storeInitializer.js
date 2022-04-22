import { PremiseStore } from './premiseStore';

const storeInitializer = () => {
	return {
		//import va viet cac store xuong duoi
		premiseStore: new PremiseStore()
	};
};

export const stores = storeInitializer();
