export class TokenData {
	id: string = '-1';
	name: string = '';
	lastname: string = '';
	password: string = '';
	email: string = '';
	jmbg: string = '';
	paid: boolean = false;
	exp: number = -1;
	iat: number = -1;
	constructor(
		name: string,
		lastname: string,
		email: string,
		password: string,
		jmbg: string,
		paid: boolean
	) {
		this.id = '-1';
		this.name = name;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.jmbg = jmbg;
		this.paid = paid;
	}
}
