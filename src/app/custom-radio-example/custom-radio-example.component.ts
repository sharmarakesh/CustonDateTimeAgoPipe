import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-radio-example',
  templateUrl: './custom-radio-example.component.html',
  styleUrls: ['./custom-radio-example.component.css']
})
export class CustomRadioExampleComponent implements OnInit {

  data = [
    {value: 'title1', title: 'title1'},
    {value: 'title2', title: 'title2'},
    ];
    data1 = [
      {value: 'Rakesh', title: 'Rakesh'},
      {value: 'Sharma', title: 'Sharma'},
      ];
  dataOut: any;

  constructor() { }

  ngOnInit() {
  }

}
