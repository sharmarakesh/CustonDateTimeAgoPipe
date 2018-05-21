import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NavigationService } from './navigation-service';

@Injectable()
export class RatingService {
  private navigationList: any = [];
  private productList: any = [];

  private subject = new Subject<any>();

  constructor(private navigationService: NavigationService) {}

  public getProductList() {
    return this.productList;
  }

  public setProductList(data: any) {
    this.productList.push(data);
    console.log('HHHHHHHHHHHHHHHHH : ', this.productList);
  }

  public getNavigationList() {
    return this.navigationList;
  }
  public setNavigationList(data) {
    this.navigationList.push(data);
  }

  public getMessage(): Observable<any> {
      return this.subject.asObservable();
  }

  public clearMessage() {
    this.subject.next();
  }

  public setMessage(data: any) {
      const id = new Date().getTime();
      const id1: string = id.toString();
     // const id1 = this.productList.length;
      data[0].id = id1;
      console.log('TIME STAMP :', id1);
      this.setProductList(data[0]);
      console.log('PRODUCT LIST : ', this.getProductList());
      const navi = this.navigationService.getNavigationByType(data[0].label);
      console.log('FILTERED NAVIGATION : ', navi);
      navi[0].identificationNo = id1;
      this.setNavigationList(navi[0]);
      this.subject.next(data[0]);
  }
}
