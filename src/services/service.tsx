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
export const sendCode = async (
	code: string,
	email: string,
	password: string
) => {
	console.log(email);
	console.log(password);

	return await axios.post('http://localhost:6001/login2', {
		email,
		password,
		code,
	});
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
		role: company.role,
	};
	return await axios.post('http://localhost:6001/registration', c);
};
export const getPackages = async () => {
	return await axios.get('http://localhost:6001/getPackages', {
		headers: { authentication: getToken() },
	});
};
export const getCompanies = async () => {
	return await axios.get('http://localhost:6001/getCompanies', {
		headers: { authentication: getToken() },
	});
};
export const getPackage = async (id: number) => {
	return await axios.get('http://localhost:6001/getPackage?id=' + id, {
		headers: { authentication: getToken() },
	});
};
export const buyPackage = async (p: Number) => {
	return await axios.post(
		'http://localhost:6001/buyPackage',
		{ id: p },
		{
			headers: { authentication: getToken() },
		}
	);
};
export const buyPremium = async () => {
	return await axios.post(
		'http://localhost:6001/buyPremium',
		{},

		{
			headers: { authentication: getToken() },
		}
	);
};
export const updatePremium = async (id: string) => {
	return await axios.post(
		'http://localhost:6001/updatePremium',
		{ id: id },

		{
			headers: { authentication: getToken() },
		}
	);
};
export const addPackageToCompany = async (paymentId: string) => {
	return await axios.get(
		'http://localhost:6001/addPackageToCompany' + '?paymentId=' + paymentId,
		{
			headers: { authentication: getToken() },
		}
	);
};

export const getToken = () => {
	return localStorage.getItem('token');
};

export const getUser = (): TokenData => {
	return jwt_decode(getToken() || '');
};
