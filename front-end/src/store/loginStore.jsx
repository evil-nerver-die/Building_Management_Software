import { LoginService } from '../service/loginService';

export class LoginStore {
	loginService;

	constructor() {
		this.loginService = new LoginService();
	}

	validateInfo = async data => {
		await this.loginService.validateInfo(data);
	};

	registerAcc = async data => {
		await this.loginService.registerAcc(data);
	};
}
