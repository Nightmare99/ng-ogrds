import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  
  @Output() selectedViewEvent = new EventEmitter<string>();
  
  changeView(view: string) {
    this.selectedViewEvent.emit(view);
  }

}
