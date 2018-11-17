import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";

import { PostLinkType } from "@core/data/posts/post-link-type.model";
import { PostLinkTypeService } from "@core/data/posts/post-link-type.service";

@Injectable({
	providedIn: "root",
})
export class LinkTypeResolve implements Resolve<PostLinkType[]> {

	constructor(private service: PostLinkTypeService) { }

	resolve(route: ActivatedRouteSnapshot) {
		if (PostLinkTypeService.isSaved()) {
			return this.service.getLocal();
		} else {
			return this.service.findAll()
				.toPromise()
				.then((result: PostLinkType[]) => {
					PostLinkTypeService.setLocal(result);

					return result;
				});
		}
	}
}
