import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeICBrowserComponent } from './fake-icbrowser/fake-icbrowser.component';
import { Browser1Component } from './browser1/browser1.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    FakeICBrowserComponent,
    Browser1Component
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class Project1Module { 
  public static components = {
    FakeICBrowserComponent, Browser1Component
  }
}
