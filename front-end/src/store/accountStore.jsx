import { AccountService } from '../service/accountService';

export class AccountStore {
	accountService;
	accountData = [];
	accountStat = {};

	constructor() {
		this.accountService = new AccountService();
	}

	getInfo = async () => {
		let result = await this.accountService.getInfo();
		if (result !== undefined) {
			this.accountData = result;
		}
	};

	updateInfo = async data => {
		await this.accountService.updateInfo(data);
	};

	changePassword = async data => {
		await this.accountService.changePassword(data);
	};

	getStat = async () => {
		let result = await this.accountService.getStat();
		if (result !== undefined) {
			this.accountStat = result;
		}
	};
}
