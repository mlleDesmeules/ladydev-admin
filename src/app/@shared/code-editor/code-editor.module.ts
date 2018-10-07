import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AceEditorModule } from "ng2-ace-editor";
import { CodeEditorComponent } from './code-editor.component';

@NgModule({
  imports: [
    CommonModule,
    AceEditorModule,
  ],
  declarations: [CodeEditorComponent],
  exports: [CodeEditorComponent],
})
export class CodeEditorModule { }
