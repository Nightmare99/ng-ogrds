import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[explorer]'
})
export class ExplorerDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
