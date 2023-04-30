import { Component, ViewChild } from '@angular/core';
import { BrowserDirective } from 'src/app/directives/browser.directive';
import { LayoutLoaderService } from '../layout-loader.service';

@Component({
  selector: 'browser-view',
  templateUrl: './browser-view.component.html',
  styleUrls: ['./browser-view.component.scss']
})
export class BrowserViewComponent {

  @ViewChild(BrowserDirective, {static: true}) browser!: BrowserDirective;

  constructor (private layoutLoader: LayoutLoaderService) {
    this.layoutLoader.loadBrowserEvent.subscribe((cmpName: string) => {
      this.loadBrowserComponent(cmpName);
    });
  }

  loadBrowserComponent(componentName: string) {
    const viewContainerRef = this.browser.viewContainerRef;
    this.layoutLoader.loadComponent(componentName, viewContainerRef);
  }

}
