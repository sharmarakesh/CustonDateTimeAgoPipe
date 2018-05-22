import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import * as moment from 'moment';
import { NgAutocompleteComponent, CreateNewAutocompleteGroup, SelectedAutocompleteItem } from 'ng-auto-complete';
import { RatingService } from './services/rating-service';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  price = 3433343243233;
  inPutdate = '2018-05-04T23:20:00';
  years = [0, 1, 2, 3, 4];
  tabList = [{label: 'car', value: '1002', id: ''}, {label: 'automotive', value: '1003', id: ''},
   {label: 'bus', value: '1004', id: ''}, {label: 'heavyVechile', value: '1005', id: ''}];
   selectedProductType: string;

   listOfProducts = ['car', 'automotive', 'heavyVechile'];
  @Output() productAdded = new EventEmitter();
  @ViewChild(NgAutocompleteComponent) public completer: NgAutocompleteComponent;

  public group = [
        CreateNewAutocompleteGroup(
            'Search / choose in / from list',
            'completer',
            [
                {title: 'Option 1', id: '1'},
                {title: 'Option 2', id: '2'},
                {title: 'Option 3', id: '3'},
                {title: 'Option 4', id: '4'},
                {title: 'Option 5', id: '5'},
            ],
            {titleKey: 'title', childrenKey: null}
        ),
    ];

    constructor(private ratingService: RatingService) {

    }

    /**
     *
     * @param item
     * @constructor
     */
    Selected(item: SelectedAutocompleteItem) {
        console.log(item);
    }

    ngOnInit() {
      this.selectedProductType = '';
    }

    addProduct() {
      // this.tabList.push({label: 'new_prod', value: '1000'});
      // this.productAdded.emit();
      console.log(this.tabList.find(data => data.label === this.selectedProductType));

      this.ratingService.setMessage(JSON.parse(JSON.stringify(this.tabList.find(data => data.label === this.selectedProductType))));
    }
    onProductChange(event) {
      console.log('CHANGED PRODUCT : ', event.target.value );
      this.selectedProductType = event.target.value;
    }


    showOriginalTabList() {
      console.log('showOriginalTabList() : ', this.tabList);
    }


}
