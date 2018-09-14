// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { ViolationModel } from './violation.model';
// import { ControlContainer, NgForm } from '@angular/forms';
// import { DriverInfoService } from '../../../../../../services/rating/driver-info.service';
// //import { EventEmitter } from 'events';

// import { INgxMyDpOptions } from 'ngx-mydatepicker';
// import * as moment from "moment";

// import { DateMask } from '../../../../../../directives/datemask-helper';

// @Component({
//   selector: 'app-violations',
//   templateUrl: './violations.component.html',
//   styleUrls: ['./violations.component.scss'],
//   viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
// })
// export class ViolationsComponent implements OnInit {

//   public myDatePickerOptions: INgxMyDpOptions = {
//     dateFormat: 'mm/dd/yyyy',
//     showTodayBtn: false,
//     firstDayOfWeek: 'su',
//     markCurrentDay: true,
//     sunHighlight: false,
//     disableSince: { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() + 1 }
//   };

//   dateMask = DateMask;

//   isSaved = false;
//   @Input() violation: ViolationModel;
//   @Input() violationId
//   @Input() driverId;
//   @Input() quoteId;
//   @Input() violationIndex;
//   @Input() driverIndex;
//   @Input() driverList;
//   @Input() currentState;
//   @Output() violationData: EventEmitter<any> = new EventEmitter<any>();
//   @Output() removeViolationData: EventEmitter<any> = new EventEmitter<any>();
//   @Output() violationSavedEvent: EventEmitter<any> = new EventEmitter<any>();
//   @Input() drvFormName;
//   private name = "violations-"

//   oldViolation: any = [];

//   constructor(private driverInfoService: DriverInfoService) { }

//   ngOnInit() {

//     this.name = this.drvFormName+ "-"+this.name + this.violationIndex;
    
//     if (this.violation.id !== "") {
//       this.isSaved = true;

//       // Pre-populate date
//       if (this.violation.violationDate) {
//         this.violation['violationDateObj'] = { jsdate: new Date(this.violation.violationDate) };
//       }
//     }

//     console.log();
//     console.log("INPUT DRIVER INDEX : ", this.driverIndex);
//     console.log("INPUT ACCIDENT INDEX : ", this.violationIndex);
//   }

//   saveData() {
//     if (this.driverId) {
//       this.violationId = this.violation.id;
//       if (this.violationId) {
//         this.driverInfoService.editViolationInfo(this.violation)
//       }
//       else {
//         this.violation.setQuoteId(this.quoteId);
//         this.violation.setDriverId(this.driverId);
//         this.driverInfoService.createViolationInfo(this.violation).subscribe(
//           (data: ViolationModel) => {
//             console.log('EZ violation saved successfully', data);
//             this.violation = data;
//             this.violationId = data.id;
//             this.violationSavedEvent.emit({ saveDriverIndex: this.driverIndex, saveComplossDataIndex: this.violationIndex, compLossData: data });
//           },
//           (error) => {
//             console.log('Error occurred : ', error);
//           }
//         );
//       }
//     }
//     else {
//       this.violationData.emit(this.violation);
//     }
//     console.log(this.violation);
//     this.isSaved = true;
//     this.violationSavedEvent.emit({ saveDriverIndex: this.driverIndex });
//   }

//   editData() {
//     this.oldViolation = JSON.parse(JSON.stringify(this.violation));
//     this.isSaved = false;
//   }

//   cancelData() {
//     if (this.violation.id !== "") {
//       this.violation = JSON.parse(JSON.stringify(this.oldViolation));
//       this.violation['violationDateObj'] = { jsdate: new Date(this.violation.violationDate) };
//     }
//     else {
//       this.removeData();
//     }

//     this.isSaved = true;
//   }

//   removeData() {
//     this.isSaved = false;
//     if (this.violation.id !== "") {
//       this.driverInfoService.deleteViolationInfo(this.violation).subscribe(
//         (data) => {
//           console.log('EZ accident saved sucessfully', data);
//           this.removeViolationData.emit({ removeAccidentDataIndex: this.violationIndex, removeDriverIndex: this.driverIndex });
//         },
//         (error) => {
//           console.log('Error occurred : ', error);
//         }
//       );
//     } else {
//       this.removeViolationData.emit({ removeAccidentDataIndex: this.violationIndex, removeDriverIndex: this.driverIndex });
//     }
//   }

//   // TODO
//   validateViolationDate(data) {
//     if (data) {
//       console.log(data);
//       this.violation.violationDate = moment(data['jsdate'],  "YYYY-MM-DDTHH:mm:ss").format();
//     }

//     console.log(this.violation.violationDate);
//   }
// }
