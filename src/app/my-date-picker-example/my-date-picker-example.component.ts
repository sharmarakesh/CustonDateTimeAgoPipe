import { Component, OnInit } from '@angular/core';
import { IMyDateModel, IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-my-date-picker-example',
  templateUrl: './my-date-picker-example.component.html',
  styleUrls: ['./my-date-picker-example.component.css']
})
export class MyDatePickerExampleComponent implements OnInit {

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
    showTodayBtn: false,
    markCurrentDay: true,
    disableUntil: {year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() - 1}
};



// Initialized to specific date (09.10.2018).
// public model: any = { date: { year: 2018, month: 10, day: 9 } };
   public model: any = new Date(Date.now());
  constructor() { }

  ngOnInit() {
  }

  onDateChanged(event: IMyDateModel) {
    // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    console.log(event.date);
  }
}
