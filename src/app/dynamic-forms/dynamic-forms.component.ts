import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent implements OnInit {

  carierList: any;
  formNameList: any[] = [];
  formGroupList: any[] = [];
  constructor(private http:HttpClient  ) { }

  ngOnInit() {

    this.http.get('/assets/GenarateHideShow.json').subscribe(
      (data) => {
        this.carierList = data;
        this.prepareDynamicForm();
      }
    );

    this.getFormGroupList();
  }

  getFormGroupList() {
    for(let i=0; i< 5; i++) {
      let group: any = {};

   
      group[i] = new FormControl(i || '', Validators.required)
                            new FormControl(i || '');
    // return new FormGroup(group); 
      this.formGroupList.push(new FormGroup(group));
    }

    console.log(this.formGroupList);
  }

  prepareDynamicForm() {
    Object.entries(this.carierList).forEach(
      (ele) => {
        console.log(ele);
        let formName = ele[0]+'Form';
        let formGroupName = ele[0]+'Data';

        console.log(formName);
        let ob1 = {};
        ob1[formGroupName] = new FormGroup({
          shippingOption: new FormControl()
        });

        // {
        //   formGroupName : new FormGroup({
        //     shippingOption: new FormControl('', Validators.required)
        //   })
        // }
        
        let form = new FormGroup(ob1);

        let ob = {};
        ob[formName] = form;
        ob['formName'] = formName;
        ob['formGroupName'] = formGroupName;
        this.formNameList.push(ob);
      }
    );

    console.log(this.formNameList);
  }

}
