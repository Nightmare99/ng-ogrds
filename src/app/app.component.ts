import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OGRDS';
  browserWidth: string = "50%";
  explorerWidth: string = "50%";
  browserDisplay: string = "inline-block";
  explorerDisplay: string = "inline-block";
  selectedView: string = "split";

  onChangeView(view: string): void{
    this.selectedView = view;
    switch(this.selectedView) {
      case "split": {
        this.browserWidth = "50%";
        this.explorerWidth = "50%";
        this.browserDisplay = "inline-block";
        this.explorerDisplay = "inline-block";
      } break;
      case "explorer": {
        this.browserWidth = "0%";
        this.explorerWidth = "100%";
        this.browserDisplay = "none";
        this.explorerDisplay = "inline-block";
      } break;
      case "browser": {
        this.browserWidth = "100%";
        this.explorerWidth = "0%";
        this.browserDisplay = "inline-block";
        this.explorerDisplay = "none";
      } break;
    }
  }
}
