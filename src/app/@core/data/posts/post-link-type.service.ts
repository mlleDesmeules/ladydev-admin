import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { throwError } from "rxjs";

import { BaseService } from "@core/data/base.service";
import { PostLinkType } from "@core/data/posts/post-link-type.model";

@Injectable({
	providedIn: "root",
})
export class PostLinkTypeService extends BaseService {
	private static LOCALSTORAGE_KEY = "postlinktypes";

	public baseUrl = "post-links";
	public modelName = "types";

	constructor(@Inject(HttpClient) http: HttpClient) {
		super(http);

		this.model = (construct: any) => new PostLinkType(construct);
	}

	static isSaved(): boolean {
		const list = localStorage.getItem(PostLinkTypeService.LOCALSTORAGE_KEY);

		return (list !== null && list !== undefined && list.length > 0);

	}

	static setLocal(types: any) {
		localStorage.setItem(PostLinkTypeService.LOCALSTORAGE_KEY, JSON.stringify(types));
	}

	create(body: any) {
		return throwError(this.mapError({ code: 501, error: { message: "Not Implemented" } }));
	}

	delete(id: any) {
		return throwError(this.mapError({ code: 501, error: { message: "Not Implemented" } }));
	}

	findOne() {
		return throwError(this.mapError({ code: 501, error: { message: "Not Implemented" } }));
	}

	findById(id: any) {
		return throwError(this.mapError({ code: 501, error: { message: "Not Implemented" } }));
	}

	getLocal(): PostLinkType[] {
		const list = localStorage.getItem(PostLinkTypeService.LOCALSTORAGE_KEY);

		return this.mapListToModelList(JSON.parse(list));
	}

	update(id: any, body: any) {
		return throwError(this.mapError({ code: 501, error: { message: "Not Implemented" } }));
	}
}
