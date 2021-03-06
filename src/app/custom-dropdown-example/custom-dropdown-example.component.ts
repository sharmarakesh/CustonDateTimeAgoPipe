import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown-example',
  templateUrl: './custom-dropdown-example.component.html',
  styleUrls: ['./custom-dropdown-example.component.css']
})
export class CustomDropdownExampleComponent implements OnInit{
  name:string;
  someValue: any = 'service-worker-4';
  someValue1: any = "";
  state: any = {
    type: 'a',
    defaultValue: this.someValue
  };
  state1: any = {
    type: 'b',
    defaultValue: null
  };
  constructor() {
    this.name = 'Angular2'
  }
  
  ngOnInit(){
    
  }
  
  log(value: any): void {
    console.log('You submitted value: ', value);
  }

  hello(event, modelObject, needModelAssignment=false) {
    console.log(needModelAssignment);
    if(needModelAssignment) {
      modelObject.defaultValue = event.name;
      console.log(event, modelObject);
      console.log(this.state, this.state1);
    }
  }

}
