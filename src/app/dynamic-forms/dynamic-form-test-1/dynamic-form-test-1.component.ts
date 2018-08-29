import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '../../../../node_modules/@angular/forms';
// https://juristr.com/blog/2017/10/demystify-dynamic-angular-forms/
@Component({
  selector: 'app-dynamic-form-test-1',
  templateUrl: './dynamic-form-test-1.component.html',
  styleUrls: ['./dynamic-form-test-1.component.css']
})
export class DynamicFormTest1Component implements OnInit {

  private carrerData: any; // complete hide and show json data

  // variables for each form entity start

  // form group variables
  private infinityRSVPForm: FormGroup;
  private infinitySpecialForm: FormGroup;
  private mercuryForm: FormGroup;

  // form hide/show variables
  private isInfinityRSVP: boolean = false;
  private isInfinitySpecial: boolean = false;
  private isMercury: boolean = false;

  // form controls variables
  private infinityRSVPControls: any;
  private infinitySpecialControls: any;
  private mercuryControls: any;

  //form data variable
  private infinityRSVPData: any;
  private infinitySpecialData: any;
  private mercuryData: any;

  // form name variable
  infinityRSVPFormName: string = '';
  infinitySpecialFormName: string = '';
  mercuryFormName: string = '';

  // variables for each form entity end

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.http.get('/assets/GenarateHideShow.json').subscribe(
      (data) => {
        this.carrerData = data;
        this.init();
      }
    );
  }

  // Initalize all forms
  init() {
    this.inItInfinityRSVPForm(this.carrerData.infinityRSVP);
    this.inItInfinitySpecialForm(this.carrerData.infinitySpecial);
    // this.initMercuryForm(this.carrerData.mercury);
  }

  // infinityRSVP form contorl function start
  inItInfinityRSVPForm(data: any) {
    this.infinityRSVPData = data;
    console.log("infinityRSVP : ", data);
    const formGroup = {};
    this.infinityRSVPControls = Object.keys(data.questions);
    for( let prop of Object.keys(data.questions)) {
      this.infinityRSVPFormName = data.questions[prop].carrierSectionLabel;
        formGroup[prop] = new FormControl(data.questions[prop].default || '', Validators.required);
    }

    this.infinityRSVPForm = this.formBuilder.group(formGroup);
    this.isInfinityRSVP = (data.carrierSectionSetting === 'show') ? true : false;
  }
  // infinityRSVP form contorl function end

  // infinitySpecial form contorl function start
  inItInfinitySpecialForm(data: any) {
    this.infinitySpecialData = data;
    console.log("infinitySpecial : ", data);
    console.log(Object.keys(data.questions));
    const formGroup = {};
    this.infinitySpecialControls = Object.keys(data.questions);
    for( let prop of Object.keys(data.questions)) {
      this.infinitySpecialFormName = data.questions[prop].carrierSectionLabel;
        formGroup[prop] = new FormControl(data.questions[prop].default || '', Validators.required);
    }

    this.infinitySpecialForm = this.formBuilder.group(formGroup);
    console.log(this.infinitySpecialForm);
    this.isInfinitySpecial = (data.carrierSectionSetting === 'show') ? true : false;
  }
  // infinitySpecial form contorl function end

  // mercury form contorl function start
  initMercuryForm(data: any) {
    this.mercuryData = data;
    console.log("mercury : ", data);
    const formGroup = {};
    this.mercuryControls = Object.keys(data.questions);
    for( let prop of Object.keys(data.questions)) {
      this.mercuryFormName = data.questions[prop].carrierSectionLabel;
        formGroup[prop] = new FormControl(data.questions[prop].default || '', Validators.required);
    }

    this.mercuryForm = this.formBuilder.group(formGroup);
    this.isMercury = (data.carrierSectionSetting === 'show') ? true : false;
  }
  // mercury form contorl function end

  // DO NOT DELETE BELOW COMMENTED CODE
  // private mapValidators(validators) {
  //   const formValidators = [];
  
  //   if(validators) {
  //     for(const validation of Object.keys(validators)) {
  //       if(validation === 'required') {
  //         formValidators.push(Validators.required);
  //       } else if(validation === 'min') {
  //         formValidators.push(Validators.min(validators[validation]));
  //       }
  //     }
  //   }
  
  //   return formValidators;
  // }

  getFormData() {
    console.log(this.infinityRSVPForm.value);
  }

}
