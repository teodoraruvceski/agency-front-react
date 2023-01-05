export class Package {
	id: number = -1;
	name: string = '';
	description: string = '';
	price: number = 0;
	constructor(name: string, price: number, description: string) {
		this.id = -1;
		this.name = name;
		this.description = description;
		this.price = price;
	}
}
