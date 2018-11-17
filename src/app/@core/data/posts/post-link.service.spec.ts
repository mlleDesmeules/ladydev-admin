import { TestBed } from "@angular/core/testing";

import { PostLinkService } from "./post-link.service";

describe("PostLinkService", () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it("should be created", () => {
		const service: PostLinkService = TestBed.get(PostLinkService);
		expect(service).toBeTruthy();
	});
});
