import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { BaseService } from "@core/data/base.service";
import { ErrorResponse } from "@core/data/error-response.model";
import { PostLink } from "@core/data/posts/post-link.model";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

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

	create(body: any, postId?: number): Observable<PostLink | ErrorResponse> {
		return this.http.post(this._url(postId), body)
			.pipe(
				map((res: any) => this.mapModel(res)),
				catchError((err: any) => throwError(this.mapError(err))),
			);
	}

	update(id: number, body: any, linkType?: number): Observable<PostLink | ErrorResponse> {
		return this.http.put(this._url(id, linkType), body)
			.pipe(
				map((res: any) => this.mapModel(res)),
				catchError((err: any) => throwError(this.mapError(err))),
			);
	}

	protected _url(id: string | number, type?: string | number): string {
		return `/${this.baseUrl}/${id}/${this.modelName}` + (type ? `/${type}` : "");
	}
}
