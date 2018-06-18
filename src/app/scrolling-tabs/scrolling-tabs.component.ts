import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrolling-tabs',
  templateUrl: './scrolling-tabs.component.html',
  styleUrls: ['./scrolling-tabs.component.css']
})
export class ScrollingTabsComponent implements OnInit {
  currentPage = 0;
  newDriversList: any = ['driver-0', 'driver-1', 'driver-2', 'driver-3', 'driver-4'];

  constructor() { }

  ngOnInit() {

  }

  addDriver() {
    const drv = 'driver-' + this.newDriversList.length;
    this.newDriversList.push(drv);
  }

  removeDriver(i) {
    this.newDriversList.splice(i, 1);
  }

  previous(state: string) {
    // console.log(state);
     if ( this.currentPage !== 0 ) {
       this.currentPage--;
       console.log('PREV : ', this.currentPage);
       const elmnt = document.getElementById('cnn');
       elmnt.scrollLeft -= 250;
     }
   }

   next(state: string) {
     // console.log(state);
    //  if ( this.newDriversList.length <= 10) {
      if ( this.currentPage < this.newDriversList.length ) {
        this.currentPage++;
        console.log('NEXT : ', this.currentPage);
        const elmnt = document.getElementById('cnn');
         elmnt.scrollLeft += 250;
      }
    //  } else {
    //    alert('Hello: - Enough adding drivers');
    //  }

   }

}

