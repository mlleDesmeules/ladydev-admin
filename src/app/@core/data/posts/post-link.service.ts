import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { BaseService } from "@core/data/base.service";
import { PostLink } from "@core/data/posts/post-link.model";

@Injectable({
	providedIn: "root",
})
export class PostLinkService extends BaseService {
	public baseUrl = "posts";
	public modelName = "links";

	constructor(@Inject(HttpClient) http: HttpClient) {
		super(http);

		this.model = (construct: any) => new PostLink(construct);
	}

	protected _url(id: string | number, type?: string | number): string {
		return `/${this.baseUrl}/${id}/${this.modelName}` + (type ? `/${type}` : "");
	}
}
