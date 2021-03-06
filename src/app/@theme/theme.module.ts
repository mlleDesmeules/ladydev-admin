import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { PageTitleService } from "@theme/components/page-title/page-title.service";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LaddaModule } from "angular2-ladda";
import { NgxSpinnerModule } from "ngx-spinner";

import {
	FooterComponent, HeaderComponent, ItemComponent, ItemDropdownComponent, ItemLinkComponent, PageTitleComponent,
	SidemenuComponent,
} from "./components";
import { LayoutComponent } from "./layout/layout.component";
import { MessagesComponent, MessagesService, NotificationsComponent, UserComponent } from "./widgets";

const MODULES = [
	//  core modules
	CommonModule,
	RouterModule,

	// third party modules
	NgbModule,
	LaddaModule,
	NgxSpinnerModule,
	FontAwesomeModule,
];

const COMPONENTS = [
	LayoutComponent,

	//  components
	FooterComponent,
	HeaderComponent,
	PageTitleComponent,
	SidemenuComponent,
	ItemComponent,
	ItemDropdownComponent,
	ItemLinkComponent,

	//  widgets
	MessagesComponent,
	NotificationsComponent,
	UserComponent,
];

const PROVIDERS = [
	PageTitleService,
	MessagesService,
];

@NgModule({
	imports      : [ ...MODULES ],
	declarations : [ ...COMPONENTS ],
	exports      : [ ...MODULES, ...COMPONENTS ],
})
export class ThemeModule {
	static forRoot (): ModuleWithProviders {
		return <ModuleWithProviders>{
			ngModule  : ThemeModule,
			providers : [ ...PROVIDERS ],
		};
	}
}
