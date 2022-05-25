import { LoginService } from '../service/loginService';

export class LoginStore {
	loginService;

	constructor() {
		this.loginService = new LoginService();
	}

	registerAcc = async data => {
		await this.loginService.registerAcc(data);
	};
}
