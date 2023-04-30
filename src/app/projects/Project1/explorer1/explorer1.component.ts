import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-explorer1',
  templateUrl: './explorer1.component.html',
  styleUrls: ['./explorer1.component.scss']
})
export class Explorer1Component implements OnInit {

  @Input() data: any;

  ngOnInit(): void {
    console.log(this.data);
  }

}
