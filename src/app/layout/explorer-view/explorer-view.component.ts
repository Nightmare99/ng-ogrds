import { Component, ViewChild } from '@angular/core';
import { ExplorerDirective } from '../../directives/explorer.directive';
import { LayoutLoaderService } from '../layout-loader.service';

@Component({
  selector: 'explorer-view',
  templateUrl: './explorer-view.component.html',
  styleUrls: ['./explorer-view.component.scss']
})
export class ExplorerViewComponent {

  @ViewChild(ExplorerDirective, {static: true}) explorer!: ExplorerDirective;

  constructor (private layoutLoader: LayoutLoaderService) {
    this.layoutLoader.loadExplorerEvent.subscribe((cmpData: any) => {
      this.loadExplorerComponent(cmpData);
    });
  }

  loadExplorerComponent(cmpData: any) {
    const viewContainerRef = this.explorer.viewContainerRef;
    this.layoutLoader.loadComponent(cmpData.cmp, viewContainerRef, cmpData.data);
  }

}
