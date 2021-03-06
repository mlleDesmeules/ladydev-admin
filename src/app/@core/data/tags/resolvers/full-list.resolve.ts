import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";

import { Tag } from "@core/data/tags/tag.model";
import { TagService } from "@core/data/tags/tag.service";

@Injectable()
export class FullListResolve implements Resolve<Tag[]> {

	constructor ( private service: TagService ) { }

	resolve ( route: ActivatedRouteSnapshot ) {
		this.service.filters.setPagination({ currentPage : 0, perPage : -1 });

		return this.service
				.findAll().toPromise()
				.then(( result: Tag[] ) => result);
	}
}
