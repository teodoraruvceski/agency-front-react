export class Company {
	id: number = -1;
	name: string = '';
	pib: string = '';
	password: string = '';
	email: string = '';
	paid: boolean = false;
	constructor(name: string, pib: string, email: string, password: string) {
		this.id = -1;
		this.name = name;
		this.email = email;
		this.password = password;
		this.pib = pib;
		this.paid = false;
	}
}
