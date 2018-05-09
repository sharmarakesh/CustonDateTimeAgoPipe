import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  price = 3433343243233;
  // myDate;
  // now;
  // seconds;
  // minutes;
  // hours;
  // days;
  // years;

  inPutdate = '2018-05-04T23:20:00';

  ngOnInit() {
  //   this.myDate = moment('2018-05-04T21:40:00', 'YYYY-MM-DDTHH:mm:ss');
  // this.now = moment(new Date(), 'YYYY-MM-DDTHH:mm:ss');
  // this.seconds = this.now.diff(this.myDate, 'seconds');
  // this.minutes = this.now.diff(this.myDate, 'minutes');
  // this.hours = this.now.diff(this.myDate, 'hours');
  // this.days = this.now.diff(this.myDate, 'days');
  // this.years = this.now.diff(this.myDate, 'years');
  //   console.log('now: ' + this.now + '   ::: myDate : ' + this.myDate);
  //   console.log(this.years + ' years, ' + this.days + ' days, '
  //    + this.hours + ' hours, ' + this.minutes + ' minutes, ' + Math.round(this.seconds / 100) + ' seconds');
    // console.log(this.returnFormatedDate(this.inPutdate));
    }

//   returnFormatedDate(inpDt) {
// const today = new Date();
// const savedDate = new Date(inpDt);
// const diffMs: number = today - savedDate; // milliseconds between now & savedDate
// const diffYears = Math.round(diffMs / 31536000000); // years
// const diffDays = Math.floor((diffMs % 31536000000) / 86400000); // days
// const diffHrs = Math.floor(((diffMs % 31536000000) % 86400000) / 3600000); // hours
// const diffMins = Math.round((((diffMs % 31536000000) % 86400000) % 3600000) / 60000); // minutes
// const diffSecs = Math.round(((((diffMs % 31536000000) % 86400000) % 3600000) % 60000) / 1000 );
// console.log(diffYears + ' years, ' + diffDays + ' days, ' + diffHrs + ' hours, ' + diffMins + ' minutes, ' + diffSecs + ' seconds');
//     if (diffYears > 0 ) {
//       return diffYears === 1 ?  diffYears + 'year ago' : diffYears + 'years ago';
//     }

//     if (diffDays > 0 ) {
//       return diffDays === 1 ?  diffDays + 'day ago' : diffDays + 'days ago';
//     }



//     if (diffHrs > 0 ) {
//       return diffHrs === 1 ?  diffHrs + 'hour ago' : diffHrs + 'hours ago';
//     }


//     if (diffMins > 0 ) {
//       return diffMins === 1 ?  diffMins + 'minute ago' : diffMins + 'minutes ago';
//     }


//     if (diffSecs > 0 ) {
//       return diffSecs === 1 ?  diffSecs + 'second ago' : diffSecs + 'seconds ago';
//     }
//   }
}
