import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { RatingService } from '../services/rating-service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  // @Input() tabList;
  tabList: any;
  @ViewChild('tabHolder') tabHolder: ElementRef;
  // tabList = [{label: 'car', value: '1002'}, {label: 'automotive', value: '1003'},
  //  {label: 'bus', value: '1004'}, {label: 'heavyVechile', value: '1005'}];


  // , 'truck', 'boat', 'bike'];
  constructor(private ratingService: RatingService) { }

  ngOnInit() {
    // Get the element with id='defaultOpen' and click on it
    // this.tabList = this.ratingService.getProductList().slice();
    this.ratingService.getMessage().subscribe((data) => {
      this.tabList = this.ratingService.getProductList().slice();
    });
  this.refershTab();
  }

  refershTab() {
    setTimeout(() => {
      // console.log(document.getElementById(this.tabList[0]));
      document.getElementById('defaultOpen').click();
    }, 50);
  }

  openActiveTab(evt, productName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(productName.label).style.display = 'block';
    evt.currentTarget.className += ' active';
    document.getElementById(productName.label).style.height = this.tabHolder.nativeElement.clientHeight + 'px';

}

activate(evt, g) {
  // console.log(this.tabHolder);
 // evt.currentTarget.className += ' activeBorder';
}

onProductAdded() {

}

}
