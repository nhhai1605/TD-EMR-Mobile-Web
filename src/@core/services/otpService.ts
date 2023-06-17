import identityServerService from './base/identityServerService';

class OTPService {
	sendOTP(payload) {
		return identityServerService.postAsync('User/SendSMSOTP',payload);
	}
	checkOTP(payload) {
		return identityServerService.postAsync('User/CheckSMSOTP',payload);
	}
}

export default new OTPService();
