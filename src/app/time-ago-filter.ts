import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
  name: 'timeago'
})
export class TimeAgoFilter implements PipeTransform {
  transform(value: any) {
    // console.log('Input Date Time: ', new Date(value));
    // console.log('Current Date Time: ', new Date());
    // return new Date(value);
    const today: Date = new Date();
const savedDate: Date = new Date(value);
const diffMs: any = today.getTime() - savedDate.getTime(); // milliseconds between now & savedDate
const diffYears = Math.round(diffMs / 31536000000); // years
const diffDays = Math.floor((diffMs % 31536000000) / 86400000); // days
const diffHrs = Math.floor(((diffMs % 31536000000) % 86400000) / 3600000); // hours
const diffMins = Math.round((((diffMs % 31536000000) % 86400000) % 3600000) / 60000); // minutes
const diffSecs = Math.round(((((diffMs % 31536000000) % 86400000) % 3600000) % 60000) / 1000 );
console.log(diffYears + ' years, ' + diffDays + ' days, ' + diffHrs + ' hours, ' + diffMins + ' minutes, ' + diffSecs + ' seconds');
    if (diffYears > 0 ) {
      if (diffDays > 0 ) {
        const YEARS = diffYears === 1 ?  diffYears + ' year' : diffYears + ' years';
        const DAYS = diffDays === 1 ?  diffDays + ' day' : diffDays + ' days';
        return YEARS + ' and ' + DAYS + ' ago';
      } else {
        return diffYears === 1 ?  diffYears + ' year ago' : diffYears + ' years ago';
      }
    }

    if (diffDays > 0 ) {
      if (diffHrs > 0 ) {
        const DAYS = diffDays === 1 ?  diffDays + ' day' : diffDays + ' days';
        const HOURS = diffHrs === 1 ?  diffHrs + ' hour' : diffHrs + ' hours';
        return DAYS + ' and ' + HOURS + ' ago';
      } else {
        return diffDays === 1 ?  diffDays + ' day ago' : diffDays + ' days ago';
      }
    }


    if (diffHrs > 0 ) {
      if (diffMins > 0 ) {
        const HOURS = diffHrs === 1 ?  diffHrs + ' hour' : diffHrs + ' hours';
        const MINUTES = diffMins === 1 ?  diffMins + ' minute' : diffMins + ' minutes';
        return HOURS + ' and ' + MINUTES + ' ago';
      } else {
        return diffHrs === 1 ?  diffHrs + ' hour ago' : diffHrs + ' hours ago';
      }
    }

    if (diffMins > 0 ) {
      if (diffSecs > 0 ) {
        const MINUTES = diffMins === 1 ?  diffMins + ' minute' : diffMins + ' minutes';
        const SECONDS = diffSecs === 1 ?  diffSecs + ' second' : diffSecs + ' seconds';
        return MINUTES + ' and ' + SECONDS + ' ago';
      } else {
        return diffMins === 1 ?  diffMins + ' minute ago' : diffMins + ' minutes ago';
      }
    }

    if (diffSecs > 0 ) {
      return diffSecs === 1 ?  diffSecs + ' second ago' : diffSecs + ' seconds ago';
    }
  }
}
