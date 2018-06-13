import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NavigationService {
  private navigationList: any = [
    {id: '1',
     links: [{component: '', state: 'c',  link: 'link1'},
             {component: '', state: 'c', link: 'link2'},
             {component: '', state: 'n', link: 'link3'},
             {component: '', state: 'n', link: 'link4'}],
     type: 'car', identificationNo: '', currentLinkClickedIndex: -1},
     {id: '2',
     links: [{component: '', state: 'c', link: 'link1'},
             {component: '', state: 'n', link: 'link2'},
             {component: '', state: 'n', link: 'link3'}],
     type: 'automotive', identificationNo: '', currentLinkClickedIndex: -1},
     {id: '3',
     links: [{component: '', state: 'c', link: 'link1'},
             {component: '', state: 'c', link: 'link2'}],
     type: 'heavyVechile', identificationNo: '', currentLinkClickedIndex: -1},
    ];

    private currentLinkClickedIndex = new Subject<any>();

    public getCurrentLinkClickedIndex(): Observable<any> {
      return this.currentLinkClickedIndex.asObservable();
    }

    public setCurrentLinkClickedIndex(indexNumber) {
      this.currentLinkClickedIndex.next(indexNumber);
    }

  getNavigationByType(type: any) {
    // console.log('type TO FIND PRODUCT NAVIGATION : ', type);
    // console.log('Found Product Navigation : ', this.navigationList.filter(product => product.type.toLowerCase() === type.toLowerCase()));
    const data = JSON.parse(JSON.stringify(this.navigationList.find(product => product.type.toLowerCase() === type.toLowerCase())));
    console.log('getNavigationByType :', data);
    return data;
  }
}
