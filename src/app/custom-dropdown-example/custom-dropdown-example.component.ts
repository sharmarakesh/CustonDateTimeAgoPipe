import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown-example',
  templateUrl: './custom-dropdown-example.component.html',
  styleUrls: ['./custom-dropdown-example.component.css']
})
export class CustomDropdownExampleComponent implements OnInit{
  name:string;
  someValue: any = 'service-worker-3';
  someValue1: any = "";
  state: any = {
    type: 'a'
  };
  state1: any = {
    type: 'b'
  };
  constructor() {
    this.name = 'Angular2'
  }
  
  ngOnInit(){
    
  }
  
  log(value: any): void {
    console.log('You submitted value: ', value);
  }

}
