import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector:'[browser]'
})

export class BrowserDirective{
  constructor(public viewContainerRef: ViewContainerRef){
    
  }
}