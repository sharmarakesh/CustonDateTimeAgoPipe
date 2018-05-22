import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NavigationService } from './navigation-service';

@Injectable()
export class RatingService {
  private navigationList: any = [];
  private productList: any = [];

  private subject = new Subject<any>();
  private tabChange = new Subject<string>();

  constructor(private navigationService: NavigationService) {}

  public getTabChange(): Observable<string> {
    return this.tabChange.asObservable();
  }
  public setTabChange(tabId: string) {
    this.tabChange.next(tabId);
  }

  public clearTabChange() {
    this.tabChange.next();
  }

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
      data.id = id1;
      console.log('TIME STAMP :', id1);
      this.setProductList(data);
      console.log('PRODUCT LIST : ', this.getProductList());
      const navi = this.navigationService.getNavigationByType(data.label);
      console.log('FILTERED NAVIGATION : ', navi);
      navi.identificationNo = id1;
      this.setNavigationList(navi);
      this.subject.next(data);
  }
}
