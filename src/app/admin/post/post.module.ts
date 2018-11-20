import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PostRoutingModule } from "./post-routing.module";

import { NgSelectModule } from "@ng-select/ng-select";
import { PaginationModule } from "@shared/pagination/pagination.module";
import { PipesModule } from "@shared/pipes/pipes.module";
import { ThemeModule } from "@theme/theme.module";
import { FileInputModule } from "@shared/file-input/file-input.module";
import { CodeEditorModule } from "@shared/code-editor/code-editor.module";

import { PostComponent } from "admin/post/post.component";
import { ListComponent } from "admin/post/list/list.component";
import { DetailComponent } from "admin/post/detail/detail.component";
import { CommentComponent } from "admin/post/comment/comment.component";
import { SingleComponent } from "./comment/single/single.component";
import { ReplyComponent } from "./comment/reply/reply.component";
import { LinkComponent } from "./detail/link/link.component";


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		PostRoutingModule,

		NgSelectModule,

		FileInputModule,
		PaginationModule,
		CodeEditorModule,
		PipesModule,
		ThemeModule,
	],
	declarations: [
		PostComponent,
		ListComponent,
		DetailComponent,
		CommentComponent,
		SingleComponent,
		ReplyComponent,
		LinkComponent,
	],
	entryComponents: [
		ReplyComponent,
	],
})
export class PostModule {
}
