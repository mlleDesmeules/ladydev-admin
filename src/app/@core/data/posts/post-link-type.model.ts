export class PostLinkType {
	public id: number;
	public name: string;
	public description: string;

	constructor(model: any = null) {
		if (!model) {
			return;
		}

		this.id = model.id;
		this.name = model.name;
		this.description = model.description;
	}

}
