import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rolling-tabs-new',
  templateUrl: './rolling-tabs-new.component.html',
  styleUrls: ['./rolling-tabs-new.component.css']
})
export class RollingTabsNewComponent implements OnInit {

  currentPage = 0;
  newDriversList: any = ['driver-1'];
  constructor() { }

  ngOnInit() {
  }

  addDriver() {
    let count = this.newDriversList.length+1;
    const drv = 'driver-' + count;
    this.newDriversList.push(drv);
  }

  removeDriver(i) {
    this.newDriversList.splice(i, 1);
  }

  previous(state: string) {
     if ( this.currentPage !== 0 ) {
       this.currentPage--;
       console.log('PREV : ', this.currentPage);
       const elmnt = document.getElementById('cnn');
       let elemWidth = elmnt.clientWidth / 2;
       elmnt.scrollLeft -= elemWidth;
     }
   }

   next(state: string) {
      if ( this.currentPage < this.newDriversList.length ) {
        this.currentPage++;
        console.log('NEXT : ', this.currentPage);
        const elmnt = document.getElementById('cnn');
        let elemWidth = elmnt.clientWidth / 2;
        console.log(elemWidth);
         elmnt.scrollLeft += elemWidth;
      }
   }

}
