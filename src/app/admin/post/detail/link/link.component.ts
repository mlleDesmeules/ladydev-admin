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
		this.setForm();
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
	public allTypesSelected(): boolean {
		const availableTypes = this.types.map((val) => val.id);
		const possibleTypes = (this.form.get("links") as FormArray).getRawValue().length;

		return (availableTypes.length === possibleTypes);
	}

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

	public saveLink(link: FormControl, idx: number) {
		if (!link.valid || this.postId === null) {
			return;
		}

		const isCreate = (link.get("post_id").value === null);

		const body = link.value;
		let request = this.service.create(body, this.postId);

		if (!isCreate) {
			request = this.service.update(this.postId, body, body.post_link_type);
		}

		request
			.subscribe(
				(result: PostLink) => {
					if (isCreate) {
						this.links.push(result);
					} else {
						this.links[ idx ] = result;
					}

					this.setForm();
				},
				(err: ErrorResponse) => {
					console.log(err);
				});
	}

	/**
	 *
	 * @param {FormControl} link
	 * @param {number} type
	 */
	public selectType(link: FormControl, type: number) {
		link.get("post_link_type").setValue(type);
	}

	private setForm() {
		this.form = this.builder.group({
			links: this.builder.array([]),
		});

		this.links.forEach((val: PostLink) => { this.addLink(val); });

		this.formReady.emit(this.form);
	}
}
