export class TagFilters {
	public lang: string;

	// sorting
	public orderBy: string;

	// pagination
	public pageNumber: number = 0;
	public perPage: number    = 10;

	constructor () {}

	/**
	 *
	 * @param attr
	 * @param value
	 */
	public set ( attr, value ) {
		this[ attr ] = value;
	}

	public setPagination ( pagination ) {
		this.pageNumber = pagination.currentPage;
		this.perPage    = pagination.perPage;
	}

	public formatRequest (): object {
		const params: any = {};

		if (this.lang) {
			params.lang = this.lang;
		}

		params[ "per-page" ] = this.perPage;
		params[ "page" ]     = this.pageNumber;

		return { params : params };
	}
}
