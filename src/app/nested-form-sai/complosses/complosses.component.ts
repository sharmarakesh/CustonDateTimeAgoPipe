// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { CompLossModel } from './comploss.model';
// import { ControlContainer, NgForm } from '@angular/forms';
// import { DriverInfoService } from '../../../../../../services/rating/driver-info.service';

// import { INgxMyDpOptions } from 'ngx-mydatepicker';
// import * as moment from "moment";

// import { DateMask } from '../../../../../../directives/datemask-helper';

// @Component({
//   selector: 'app-complosses',
//   templateUrl: './complosses.component.html',
//   styleUrls: ['./complosses.component.scss'],
//   viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
// })
// export class ComplossesComponent implements OnInit {

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

//   @Input() driverId;
//   @Output() compLossData: EventEmitter<any> = new EventEmitter<any>();
//   @Output() removeCompLossData: EventEmitter<any> = new EventEmitter<any>();
//   @Output() compLossSavedEvent: EventEmitter<any> = new EventEmitter<any>();
//   @Input() compLoss: CompLossModel;
//   @Input() compLossId;
//   @Input() quoteId;
//   @Input() compLossIndex;
//   @Input() driverIndex;
//   @Input() driverList;
//   @Input() currentState;
//   @Input() drvFormName;
//   private name = "complosses-"

//   // @Output() compLossData: EventEmitter<any> = new EventEmitter<any>();
//   oldCompLoss: any = [];

//   constructor(private driverInfoService: DriverInfoService) { }

//   ngOnInit() {

//     this.name = this.drvFormName+ "-"+this.name + this.compLossIndex;

//     if (this.compLoss.id !== "") {
//       this.isSaved = true;

//       // Pre-populate date
//       if (this.compLoss.lossDate) {
//         this.compLoss['lossDateObj'] = { jsdate: new Date(this.compLoss.lossDate) };
//       }
//     }

//     console.log();
//     console.log("INPUT DRIVER INDEX : ", this.driverIndex);
//     console.log("INPUT ACCIDENT INDEX : ", this.compLossIndex);
//   }

//   saveData() {
//     if (this.driverId) {
//       this.compLossId = this.compLoss.id;
//       if (this.compLossId) {
//         this.driverInfoService.editCompLossInfo(this.compLoss)
//       }
//       else {
//         this.compLoss.setQuoteId(this.quoteId);
//         this.compLoss.setDriverId(this.driverId);
//         this.driverInfoService.createCompLossInfo(this.compLoss).subscribe(
//           (data: CompLossModel) => {
//             console.log('EZ compLoss saved successfully', data);
//             this.compLoss = data;
//             this.compLossId = data.id;
//             this.compLossSavedEvent.emit({ saveDriverIndex: this.driverIndex, saveComplossDataIndex: this.compLossIndex, compLossData: data });
//           },
//           (error) => {
//             console.log('Error occurred : ', error);
//           }
//         );
//       }
//     }
//     else {
//       this.compLossData.emit(this.compLoss);
//     }
//     console.log(this.compLoss);
//     this.isSaved = true;
//     this.compLossSavedEvent.emit({ saveDriverIndex: this.driverIndex });
//   }

//   editData() {
//     this.oldCompLoss = JSON.parse(JSON.stringify(this.compLoss));
//     this.isSaved = false;
//   }

//   cancelData() {
//     if (this.compLoss.id !== "") {
//       this.compLoss = JSON.parse(JSON.stringify(this.oldCompLoss));
//       this.compLoss['lossDateObj'] = { jsdate: new Date(this.compLoss.lossDate) };
//     }
//     else {
//       this.removeData();
//     }

//     this.isSaved = true;
//   }

//   removeData() {
//     this.isSaved = false;
//     if (this.compLoss.id !== "") {
//       this.driverInfoService.deleteCompLossInfo(this.compLoss).subscribe(
//         (data) => {
//           console.log('EZ accident saved sucessfully', data);
//           this.removeCompLossData.emit({ removeAccidentDataIndex: this.compLossIndex, removeDriverIndex: this.driverIndex });
//         },
//         (error) => {
//           console.log('Error occurred : ', error);
//         }
//       );
//     } else {
//       this.removeCompLossData.emit({ removeAccidentDataIndex: this.compLossIndex, removeDriverIndex: this.driverIndex });
//     }
//   }

//   // TODO
//   validateLossDate(data) {
//     if (data) {
//       console.log(data);
//       this.compLoss.lossDate = moment(data['jsdate'],  "YYYY-MM-DDTHH:mm:ss").format();
//     }

//     console.log(this.compLoss.lossDate);

//     let lossDateDiff = moment().diff(this.compLoss.lossDate, 'years');

//     console.log(lossDateDiff);

//     if (lossDateDiff > 5) {
//       alert('Date cannot be more than 5 years in the past.');
//       this.compLoss.lossDate = null;
//       this.compLoss['lossDateObj'] = null;
//     }
//   }
// }
