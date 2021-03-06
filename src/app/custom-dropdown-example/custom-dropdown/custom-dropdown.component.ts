import { Component, OnInit, forwardRef, Input, Renderer2, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, SelectControlValueAccessor, SelectMultipleControlValueAccessor,  ControlValueAccessor, NgModel } from '../../../../node_modules/@angular/forms';


import { HttpClient } from '../../../../node_modules/@angular/common/http';


@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDropdownComponent),
      multi: true,
    }
  ],
})
export class CustomDropdownComponent implements ControlValueAccessor, OnInit {
  @Input('options') options;
  private _selectValue: any = '';
  private _onTouchedCallback: () => {};
  private _onChangeCallback: (_:any) => {};
  private _inputValue: any = '';
  private hasValue: any = "";
  private items: any;
  private isDataAvailable: boolean = false;
  private selvll;
  @Output() oo: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _http: HttpClient, private _renderer: Renderer2) {

  }

  ngOnInit() {
    
    if(this.options.type === "a") {
      console.log(this.options);
      this._http.get("assets/data/dropdownData_a.json").subscribe((res) => {
        //this.items = res;
        this.constructOptions(res);
        this.changeValue();
      });
    } 

    if(this.options.type === "b") {
      console.log(this.options);
      this._http.get("assets/data/dropdownData_b.json").subscribe((res) => {
        //this.items = res;
        console.log(res);
        this.constructOptions(res);
      });
    } 
  }

  constructOptions(obj) {
    this.items = [];
    this.items.push({"name": "<select>", "codeValue": "<select>"});
    obj.forEach((item) => {
      const ob: any = {};
      ob['name'] = item.codeValue;
      ob['codeValue'] = item.codeValue;
      ob['data'] = item;
      this.items.push(ob);
    });
    this.isDataAvailable = true;
    this.changeValue();
  }

  get selectValue(): any {
    return this._selectValue;
  }
  set selectValue(value: any) {
    if (value !== this._selectValue) {
      this._inputValue = value;
      this._onChangeCallback(value);
    }
    this.hasValue = (value != null && value.length > 0)  
     this._onTouchedCallback();
  }

  changeValue() {
    let vl = "";
    if(this.selectValue === null || this.selectValue === "") {
        if( this.options.defaultValue !== null ) {
          vl = this.options.defaultValue;
        }
      } else {
        vl = this.selectValue;
      }

      this.writeValue(vl);
      this._onChangeCallback(vl);
  }

  onValueChange(evt) {
    let selvl = this.items[+evt.target.selectedIndex];
    this.selvll = selvl;
    this.oo.emit(this.selvll);
    if(selvl.codeValue === "<select>") {
      this.writeValue("");
      this._onChangeCallback("");
    }
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    this._selectValue = value;
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this._onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this._onTouchedCallback = fn;
  }
}