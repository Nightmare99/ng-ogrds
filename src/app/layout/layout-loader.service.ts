import { EventEmitter, Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutLoaderService {

  loadBrowserEvent = new EventEmitter<string>();
  loadExplorerEvent = new EventEmitter<any>();

  constructor() { }

  loadComponent(cmpName: string, viewContainerRef: ViewContainerRef, ...args: any[]): void {
    switch(cmpName) {
      case 'ICBrowser': {
        import('../projects/Project1/project1.module').then(m => {
          viewContainerRef.clear();
          viewContainerRef.createComponent(m.Project1Module.components.FakeICBrowserComponent);
        });
      } break;
      case 'TEST': {
        import('../projects/Project1/project1.module').then(m => {
          viewContainerRef.clear();
          viewContainerRef.createComponent(m.Project1Module.components.Browser1Component);
        });
      } break;
      case 'Explorer1': {
        import('../projects/Project1/project1.module').then(m => {
          viewContainerRef.clear();
          viewContainerRef.createComponent(m.Project1Module.components.Explorer1Component).instance.data = args[0];
        });
      }
    }
  }

}
