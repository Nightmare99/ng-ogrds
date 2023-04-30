import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeICBrowserComponent } from './fake-icbrowser/fake-icbrowser.component';
import { Browser1Component } from './browser1/browser1.component';
import { MatTableModule } from '@angular/material/table';
import { Explorer1Component } from './explorer1/explorer1.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    FakeICBrowserComponent,
    Browser1Component,
    Explorer1Component
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule
  ]
})
export class Project1Module { 
  public static components = {
    FakeICBrowserComponent, 
    Browser1Component, 
    Explorer1Component
  }
}
