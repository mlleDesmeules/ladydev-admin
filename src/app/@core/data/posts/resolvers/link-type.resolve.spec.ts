import { TestBed } from "@angular/core/testing";

import { LinkTypeResolve } from "./link-type.resolve";

describe("LinkTypeResolve", () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it("should be created", () => {
		const service: LinkTypeResolve = TestBed.get(LinkTypeResolve);
		expect(service).toBeTruthy();
	});
});
