import { Component, ViewChild } from '@angular/core';
import { BrowserDirective } from 'src/app/directives/browser.directive';
import { ProjectsRegistry } from 'src/app/projects/projects.registry';

@Component({
  selector: 'browser-view',
  templateUrl: './browser-view.component.html',
  styleUrls: ['./browser-view.component.scss']
})
export class BrowserViewComponent {

  @ViewChild(BrowserDirective, {static: true}) browser!: BrowserDirective;

  loadBrowserComponent(componentName: string) {
    const viewContainerRef = this.browser.viewContainerRef;
    viewContainerRef.clear();
    let comp: any = ProjectsRegistry.get(componentName);
    viewContainerRef.createComponent(comp);
  }

}
