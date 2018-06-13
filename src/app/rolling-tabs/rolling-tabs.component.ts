import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rolling-tabs',
  templateUrl: './rolling-tabs.component.html',
  styleUrls: ['./rolling-tabs.component.css']
})
export class RollingTabsComponent implements OnInit {

  currentPage = 0;
  newDriversList: any = [];

  leftDriverObject = {
    name: 'left-test'
  };
  rightDriverObject = {
    name: 'right-test'
  };
  constructor() { }

  ngOnInit() {
    const driverObject: any = {};
    driverObject.leftDriverObject = this.leftDriverObject;
    driverObject.rightDriverObject = this.rightDriverObject;
    console.log('INIT', driverObject);
    this.newDriversList.push(driverObject);
  }

  previous(state: string) {
   // console.log(state);
    if ( this.currentPage !== 0 ) {
      this.currentPage--;
    }
  }

  next(state: string) {
    // console.log(state);
    if ( this.currentPage < this.newDriversList.length - 1 ) {
      this.currentPage++;
    }
  }

  addFrom() {
    if ( this.newDriversList.length < 11 ) {
      const driverObject: any = {};
      driverObject.leftDriverObject = this.leftDriverObject;
      driverObject.rightDriverObject = this.rightDriverObject;
      console.log('NEW', driverObject);
      this.newDriversList.push(driverObject);
    } else {
      alert('hello enough adding forms');
    }
  }
}
