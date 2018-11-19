import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ErrorResponse } from "@core/data/error-response.model";
import { PostLink, PostLinkService, PostLinkType } from "@core/data/posts";

@Component({
	selector   : "app-post-detail-link",
	templateUrl: "./link.component.html",
	styleUrls  : [ "./link.component.scss" ],
})
export class LinkComponent implements OnInit {

	@Input()
	public types: PostLinkType[] = [];

	@Input()
	public links: PostLink[];

	@Input()
	public postId: number = null;

	@Output()
	formReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

	form: FormGroup;

	constructor(private builder: FormBuilder,
				private service: PostLinkService) {
	}

	ngOnInit() {
		this.form = this.builder.group({
			links: this.builder.array([]),
		});

		this.links.forEach((val: PostLink) => { this.addLink(val); });

		this.formReady.emit(this.form);
	}

	/**
	 * todo    add comments
	 */
	public addLink(link: PostLink = null) {
		if (link === null) {
			link = new PostLink();
		}

		this.getLinks()
			.push(this.builder.group({
				post_id       : link.post_id,
				post_link_type: this.builder.control(link.link_type, [ Validators.required ]),
				link          : this.builder.control(link.link, [
					Validators.required,
					Validators.pattern(new RegExp("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?")),
				]),
			}));
	}

	/**
	 * todo    implement method to check if all types are selected
	 * @returns {boolean}
	 */
	public allTypesSelected(): boolean { return false; }

	/**
	 * todo    add comments
	 * @returns {FormArray}
	 */
	public getLinks(): FormArray { return this.form.get("links") as FormArray; }

	/**
	 *
	 * @param {FormControl} link
	 * @param {number} typeId
	 *
	 * @returns {boolean}
	 */
	public isTypeActive(link: FormControl, typeId: number): boolean {
		const linkType = link.get("post_link_type");

		return (linkType.value === typeId);
	}

	/**
	 * todo    add comments
	 * todo    implement remove links
	 */
	public removeLink(idx: number) {}

	/**
	 *
	 * @param {FormControl} link
	 * @param {number} type
	 */
	public selectType(link: FormControl, type: number) {
		link.get("post_link_type").setValue(type);
	}

	public saveLink(link: FormControl) {
		if (!link.valid) {
			return;
		}

		const body = link.value;
		let request = this.service.create(body, this.postId);

		console.log(link.get("post_id").value);
		console.log(this.postId);

		if (link.get("post_id").value !== null) {
			// request = this.service.update(this.postId, body, body.post_link_type);
		}

		request
			.subscribe(
				(result: PostLink) => {
					console.log(result);
				},
				(err: ErrorResponse) => {
					console.log(err);
				});
	}
}
