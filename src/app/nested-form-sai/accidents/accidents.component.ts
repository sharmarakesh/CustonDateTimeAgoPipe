// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { AccidentsModel } from '../accident.model';
// import { ControlContainer, NgForm } from '@angular/forms';
// import { DriverInfoService } from '../../../../../../services/rating/driver-info.service';

// import { INgxMyDpOptions } from 'ngx-mydatepicker';
// import * as moment from "moment";

// import { DateMask } from '../../../../../../directives/datemask-helper';

// @Component({
//   selector: 'app-accidents',
//   templateUrl: './accidents.component.html',
//   styleUrls: ['./accidents.component.scss'],
//   viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
// })
// export class AccidentsComponent implements OnInit {

//   // Date - Can't be in the future or more than 5 years in the past
//   // Must declare disableUntil before disableSince
//   public myDatePickerOptions: INgxMyDpOptions = {
//     dateFormat: 'mm/dd/yyyy',
//     showTodayBtn: false,
//     firstDayOfWeek: 'su',
//     markCurrentDay: true,
//     sunHighlight: false,
//     disableUntil: { year: new Date().getFullYear() - 5, month: new Date().getMonth() + 1, day: new Date().getDate() - 1 },
//     disableSince: { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() + 1 },
//   };

//   dateMask = DateMask;

//   isSaved = false;

//   @Input() accident: AccidentsModel;
//   @Input() driverId;
//   @Input() quoteId;
//   @Input() accidentId;
//   @Input() accdientIndex;
//   @Input() driverIndex;
//   @Input() driverList;
//   @Input() currentState;
//   @Output() accidentData: EventEmitter<any> = new EventEmitter<any>();
//   @Output() removeAccidentData: EventEmitter<any> = new EventEmitter<any>();
//   @Output() accidentSavedEvent: EventEmitter<any> = new EventEmitter<any>();
//   @Input() drvFormName;
//   private name = "accidents-"
//   oldAccident: any = [];

//   constructor(private driverInfoService: DriverInfoService) { }

//   ngOnInit() {

//     this.name = this.drvFormName+ "-"+this.name + this.accdientIndex;

//     if (this.accident.id !== "") {
//       this.isSaved = true;

//       // Pre-populate date
//       if (this.accident.accidentDate) {
//         this.accident['accidentDateObj'] = { jsdate: new Date(this.accident.accidentDate) };
//       }
//     }

//     console.log();
//     console.log("INPUT DRIVER INDEX : ", this.driverIndex);
//     console.log("INPUT ACCIDENT INDEX : ", this.accdientIndex);
//   }

//   saveData() {
//     // this.accident.setQuoteId(this.quoteId)
//     if (this.driverId) {
//       this.accidentId = this.accident.id;

//       if (this.accident.id) {
//         // this.accident.setId(this.accidentId);
//         this.driverInfoService.editAccidentInfo(this.accident);
//       }
//       else {
//         this.accident.setQuoteId(this.quoteId);
//         this.accident.setDriverId(this.driverId);
//         this.driverInfoService.createAccidentInfo(this.accident).subscribe(
//           (data: AccidentsModel) => {
//             console.log('EZ accident saved sucessfully', data);
//             this.accident = data;
//             this.accidentId = data.id;
//             this.accidentSavedEvent.emit({ saveDriverIndex: this.driverIndex, saveAccidentDataIndex: this.accdientIndex, accidentData: data });
//           },
//           (error) => {
//             console.log('Error occurred : ', error);
//           }
//         );
//       }
//     } 
//     else {
//       this.accidentData.emit(this.accident);
//     }
//     console.log(this.accident);
//     this.isSaved = true;
//     this.accidentSavedEvent.emit({ saveDriverIndex: this.driverIndex });

//   }
  
//   editData() {
//     this.oldAccident = JSON.parse(JSON.stringify(this.accident));
//     this.isSaved = false;
//   }

//   cancelData() {
//     if (this.accident.id !== "") {
//       this.accident = JSON.parse(JSON.stringify(this.oldAccident));
//       this.accident['accidentDateObj'] = { jsdate: new Date(this.accident.accidentDate) };
//     }
//     else {
//       this.removeData();
//     }

//     this.isSaved = true;
//   }

//   removeData() {
//     this.isSaved = false;
//     if (this.accident.id !== "") {
//       this.driverInfoService.deleteAccidentInfo(this.accident).subscribe(
//         (data) => {
//           console.log('EZ accident saved successfully', data);
//           this.removeAccidentData.emit({ removeAccidentDataIndex: this.accdientIndex, removeDriverIndex: this.driverIndex });
//         },
//         (error) => {
//           console.log('Error occurred : ', error);
//         }
//       );
//     } else {
//       this.removeAccidentData.emit({ removeAccidentDataIndex: this.accdientIndex, removeDriverIndex: this.driverIndex });
//     }
//   }

//   // TODO
//   validateAccidentDate(data) {
//     if (data) {
//       console.log(data);
//       this.accident.accidentDate = moment(data['jsdate'],  "YYYY-MM-DDTHH:mm:ss").format();
//     }

//     console.log(this.accident.accidentDate);

//     let accidentDateDiff = moment().diff(this.accident.accidentDate, 'years');

//     console.log(accidentDateDiff);

//     if (accidentDateDiff > 5) {
//       alert('Date cannot be more than 5 years in the past.');
//       this.accident.accidentDate = null;
//       this.accident['accidentDateObj'] = null;
//     }
//   }

//   validateAmount(data) {
//     console.log(data);
//   }
// }
