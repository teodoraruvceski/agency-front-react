export class User {
	id: number = -1;
	name: string = '';
	lastname: string = '';
	password: string = '';
	email: string = '';
	jmbg: string = '';
	premium: boolean = false;
	constructor(
		name: string,
		lastname: string,
		email: string,
		password: string,
		jmbg: string,
		premium: boolean
	) {
		this.id = -1;
		this.name = name;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.jmbg = jmbg;
		this.premium = premium;
	}
}
