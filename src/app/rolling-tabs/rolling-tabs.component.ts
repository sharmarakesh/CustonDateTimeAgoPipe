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
    name: 'left-test',
    fname: '',
    lname: '',
    ratedDriver: '',
    relationship: '',
    gender: '',
    maritalStatus: '',
    DOB: '',
    SSN: '',
    dlStatus: '',
    ageLicensed: '',
    DL: '',
    sdipPoints: '',
    dlState: '',
    licensesus: '',
    srs22: '',
    fr44: '',
    education: '',
    occupationIndustry: '',
    occupationTitle: '',
    defensivedriver: '',
    goodStudent: '',
    Student100milesaway: '',
    DriverEducation: '',
    GoodDriver: '',
    MatureDriver: '',
    accidents: [{
      dateOfAccident: '',
      driver: '',
      AccidentDescription: '',
      PDAmount: '',
      BIAmount: '',
      CollisionAmount: '',
      MPAmount: '',
      VehicleInvolved: ''
    }
    ],
    violations: [{
      DateofViol: '',
      Driver: '',
      ViolationDescription: ''
    }],
    complosses: [{
      AddaLoss: '',
      DateofLoss: '',
      Driver: '',
      LossDescription: '',
      Amount: '',
      VehicleInvolved: ''
    }]
  };
  rightDriverObject = {
    name: 'right-test'
  };
  constructor() { }

  ngOnInit() {
    const driverObject: any = {};
    driverObject.leftDriverObject = this.leftDriverObject;
    // driverObject.rightDriverObject = this.rightDriverObject;
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
