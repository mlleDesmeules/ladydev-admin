import { TestBed } from "@angular/core/testing";

import { PostLinkTypeService } from "./post-link-type.service";

describe("PostLinkTypeService", () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it("should be created", () => {
		const service: PostLinkTypeService = TestBed.get(PostLinkTypeService);
		expect(service).toBeTruthy();
	});
});
