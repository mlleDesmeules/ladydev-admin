export class PostLink {
	public post_id: number = null;
	public link_type: number = null;
	public link: string = null;

	constructor(model: any = null) {
		if (!model) {
			return;
		}

		this.post_id = parseInt(model.post_id, 10);
		this.link_type = parseInt(model.link_type, 10);
		this.link = model.link;
	}
}
