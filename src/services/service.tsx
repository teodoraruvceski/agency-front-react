import axios from 'axios';
import { Company } from '../models/Company';

export const pay = (total: number) => {
	//return axios.get('https://localhost:6001/api/Home');
	return axios.get('http://localhost:3005');
};

export const login = (email: string, password: string) => {
	return axios.post('https://localhost:6001/api/Companies/login', {
		email: email,
		password: password,
	});
};
export const register = (company: Company) => {
	console.log(company);
	return axios.post('https://localhost:6001/api/Companies/register', {
		email: company.email,
		password: company.password,
		name: company.name,
		pib: company.pib,
	});
};
export const testPSP_Api = () => {
	return axios.get(
		'https://localhost:5001/api/home/start-paypal-payment?total=10'
	);
};
