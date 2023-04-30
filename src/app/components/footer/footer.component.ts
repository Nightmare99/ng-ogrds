import { Component, EventEmitter, Output } from '@angular/core';
import { LayoutLoaderService } from 'src/app/layout/layout-loader.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  
  @Output() selectedViewEvent = new EventEmitter<string>();
  
  constructor(private layoutLoader: LayoutLoaderService) {}

  changeView(view: string) {
    this.selectedViewEvent.emit(view);
  }

  load(compName: string) {
    this.layoutLoader.loadBrowserEvent.emit(compName);
  }

}
