import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-radio-example-1',
  templateUrl: './custom-radio-example-1.component.html',
  styleUrls: ['./custom-radio-example-1.component.css']
})
export class CustomRadioExample1Component implements OnInit {
  someValue: any = 'service-worker-2';
  someValue1: any = "test-4";
  state: any = {
    type: 'a',
    defaultValue: this.someValue
  };
  state1: any = {
    type: 'b',
    defaultValue: null
  };
  constructor() { }

  ngOnInit() {
  }
  log(value: any): void {
    console.log('You submitted value: ', value);
  }

  hello(event, modelObject, needModelAssignment=false) {
    console.log(needModelAssignment);
    if(needModelAssignment) {
      modelObject.defaultValue = event.codeValue;
      console.log(event, modelObject);
      console.log(this.state, this.state1);
    }
  }
}
