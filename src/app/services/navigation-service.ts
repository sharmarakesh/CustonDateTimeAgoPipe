import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {
  private navigationList: any = [
    {id: '1',
     links: [{component: '', state: 'c', link: 'link1'},
             {component: '', state: 'c', link: 'link2'},
             {component: '', state: 'n', link: 'link3'},
             {component: '', state: 'n', link: 'link4'}],
     type: 'car', identificationNo: ''},
     {id: '2',
     links: [{component: '', state: 'c', link: 'link1'},
             {component: '', state: 'n', link: 'link2'},
             {component: '', state: 'n', link: 'link3'}],
     type: 'automotive', identificationNo: ''},
     {id: '3',
     links: [{component: '', state: 'c', link: 'link1'},
             {component: '', state: 'c', link: 'link2'}],
     type: 'heavyVechile', identificationNo: ''},
    ];

  getNavigationByType(type: any) {
    console.log('type TO FIND PRODUCT NAVIGATION : ', type);
    console.log('Found Product Navigation : ', this.navigationList.filter(product => product.type.toLowerCase() === type.toLowerCase()));
    return this.navigationList.filter(product => product.type.toLowerCase() === type.toLowerCase());
  }
}
