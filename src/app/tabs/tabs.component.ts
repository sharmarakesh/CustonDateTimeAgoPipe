import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { RatingService } from '../services/rating-service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  // @Input() tabList;
  productList: any;
  @ViewChild('tabHolder') tabHolder: ElementRef;
  // tabList = [{label: 'car', value: '1002'}, {label: 'automotive', value: '1003'},
  //  {label: 'bus', value: '1004'}, {label: 'heavyVechile', value: '1005'}];
  // , 'truck', 'boat', 'bike'];
  constructor(private ratingService: RatingService) { }

  ngOnInit() {
    this.ratingService.getMessage().subscribe((data) => {
      this.productList = this.ratingService.getProductList().slice();
      console.log(this.productList);
      this.refershTab();
    });
  // this.refershTab();
  }

  refershTab() {
    setTimeout(() => {
      // console.log(document.getElementById(this.tabList[0]));
      document.getElementById('defaultOpen').click();
    }, 100);
  }

  openActiveTab(evt, productName) {
   // console.log(evt, '', productName);
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace('active', ' inactive');
    }
    document.getElementById(productName.id).style.display = 'block';
    evt.currentTarget.className += ' active';
    document.getElementById(productName.id).style.height = this.tabHolder.nativeElement.clientHeight + 'px';
}

activate(evt, g) {
  // console.log(evt);
  this.ratingService.setTabChange(evt);
  // console.log(this.tabHolder);
 // evt.currentTarget.className += ' activeBorder';
}

onProductAdded() {

}

getIndexofCompletedState(navList) {
  console.log(navList);
  let index = 0;
  for ( let i = 0; i < navList.length; i++) {
    if ( navList[i].state === 'c' ) {
      index = i;
    } else {
      break;
    }
  }
  console.log(index);
  return index;
}

}
