import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserViewComponent } from './layout/browser-view/browser-view.component';
import { ExplorerViewComponent } from './layout/explorer-view/explorer-view.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { FooterComponent } from './components/footer/footer.component';
import { Browser1Component } from './projects/Project1/browser1/browser1.component'
import { BrowserDirective } from './directives/browser.directive';
import { FakeICBrowserComponent } from './projects/Project1/fake-icbrowser/fake-icbrowser.component';


@NgModule({
  declarations: [
    AppComponent,
    BrowserViewComponent,
    ExplorerViewComponent,
    FooterComponent,
    Browser1Component,
    BrowserDirective,
    FakeICBrowserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
