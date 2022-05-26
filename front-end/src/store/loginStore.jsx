import { LoginService } from '../service/loginService';

export class LoginStore {
	loginService;
	loginRespond;

	constructor() {
		this.loginService = new LoginService();
	}

	validateInfo = async data => {
		this.loginRespond = await this.loginService.validateInfo(data);
	};

	registerAcc = async data => {
		await this.loginService.registerAcc(data);
	};
}
