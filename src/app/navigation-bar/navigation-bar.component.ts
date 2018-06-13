import { Component, OnInit } from '@angular/core';
import { RatingService } from '../services/rating-service';
import { NavigationService } from '../services/navigation-service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  navigationList: any;
  currentTab;
  constructor(private ratingService: RatingService, private naviGationService: NavigationService) { }

  ngOnInit() {
   // this.navigationList = this.ratingService.getNavigationList().slice();
    this.ratingService.getMessage().subscribe(() => {
      this.navigationList = this.ratingService.getNavigationList().slice();
    });
    this.ratingService.getTabChange().subscribe((data) => {
      this.currentTab = data;
    });
  }

  naviGateToSelectedLink(idxNbr, linkState, identificationNumber) {
    console.log('idxNbr', idxNbr);
    const ob = {
      idx: '',
      identificationNo: ''
    };
    ob.idx = idxNbr;
    ob.identificationNo = identificationNumber;
    if ( linkState !== 'n' ) {
      this.naviGationService.setCurrentLinkClickedIndex(ob);
    }
  }

}
