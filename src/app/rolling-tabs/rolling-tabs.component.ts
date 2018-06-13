import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rolling-tabs',
  templateUrl: './rolling-tabs.component.html',
  styleUrls: ['./rolling-tabs.component.css']
})
export class RollingTabsComponent implements OnInit {

  newDriversList: any = [];
  driverObject: any;
  leftDriverObject: {};
  rightDriverObject: {};
  constructor() { }

  ngOnInit() {
    this.driverObject.leftDriverObject = this.leftDriverObject;
    this.driverObject.rightDriverObject = this.rightDriverObject;
    this.newDriversList.push(this.driverObject);
  }

  previous(state: string) {
    console.log(state);
  }

  next(state: string) {
    console.log(state);
  }

}
