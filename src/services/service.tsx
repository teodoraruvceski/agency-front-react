import axios from 'axios';
import { Company } from '../models/Company';

export const getPspFrontUrl = async () => {
	return await axios.get('http://localhost:6001/getPspUrl');
	//return axios.get('http://localhost:3005');
};

export const login = (email: string, password: string) => {
	return axios.post(
		'http://localhost:6001/api/Companies/login',
		JSON.stringify({
			email: email,
			password: password,
		}),
		{
			headers: {
				'content-type': 'application/json',
			},
		}
	);
};
export const paidRegistration = async (id: string) => {
	return await axios.post('http://localhost:6001/paid-registration', null, {
		params: {
			id: id,
		},
	});
};
export const register = (company: Company) => {
	console.log(company);
	const c = {
		email: company.email,
		password: company.password,
		name: company.name,
		pib: company.pib,
		paid: company.paid,
		id: -1,
	};
	return axios.post('http://localhost:6001/registration', null, {
		params: { c },
	});
};
export const testPSP_Api = () => {
	return axios.get(
		'https://localhost:5001/api/home/start-paypal-payment?total=10'
	);
};
