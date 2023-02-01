export class TokenData {
	id: string = '-1';
	name: string = '';
	lastname: string = '';
	password: string = '';
	email: string = '';
	jmbg: string = '';
	paid: boolean = false;
	exp: number = -1;
	role: string = '';
	iat: number = -1;
	premium: boolean = false;
	constructor(
		name: string,
		lastname: string,
		email: string,
		password: string,
		jmbg: string,
		paid: boolean,
		role: string
	) {
		this.id = '-1';
		this.name = name;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.jmbg = jmbg;
		this.paid = paid;
		this.role = role;
		this.premium = false;
	}
}
