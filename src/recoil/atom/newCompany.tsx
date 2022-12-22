import { atom } from 'recoil';

const newCompany = atom({
	key: 'newCompany',
	default: {
		name: '',
		pib: '',
		password: '',
		email: '',
		paid: false,
		id: 0,
	},
});

export default newCompany;
