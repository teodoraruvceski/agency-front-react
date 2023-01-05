import axios from 'axios';
import { Company } from '../models/Company';
import { Package } from '../models/Package';
import jwt_decode from 'jwt-decode';
import { TokenData } from '../models/TokenData';
export const getPspFrontUrl = async () => {
	return await axios.post('http://localhost:6001/getPspUrl');
	//return axios.get('http://localhost:3005');
};

export const login = async (email: string, password: string) => {
	return await axios.post('http://localhost:6001/login', { email, password });
};
export const paidRegistration = async (id: string) => {
	return await axios.post('http://localhost:6001/paid-registration', null, {
		params: {
			id: id,
		},
	});
};
export const register = async (company: Company) => {
	console.log(company);
	const c = {
		email: company.email,
		password: company.password,
		name: company.name,
		pib: company.pib,
		paid: company.paid,
		id: -1,
	};
	return await axios.post('http://localhost:6001/registration', c);
};
export const getPackages = async () => {
	return await axios.get('http://localhost:6001/getPackages', {
		headers: { authentification: getToken() },
	});
};
export const buyPackage = async (p: Package) => {
	return await axios.post('http://localhost:6001/buyPackage', p, {
		headers: { authentification: getToken() },
	});
};

export const getToken = () => {
	return localStorage.getItem('token');
};

export const getUser = (): TokenData => {
	return jwt_decode(getToken() || '');
};
