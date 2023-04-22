import { EventEmitter, Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutLoaderService {

  cmpLoadEventHandler = new EventEmitter<string>();

  constructor() { }

  loadComponent(cmpName: string, viewContainerRef: ViewContainerRef): void {
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
      }
    }
  }

}
