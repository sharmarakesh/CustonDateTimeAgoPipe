import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
    viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class ChildComponentComponent implements OnInit {

  @Input('data') data;
  @Input('idx') idx;
  @Input('i') i;
  private name = 'acc-';
  constructor() { }

  ngOnInit() {
    console.log(this.data);
    this.name = this.i + "-"+this.name + this.idx;
  }

  getName() {
    this.name = this.name + this.idx;
  }

}
