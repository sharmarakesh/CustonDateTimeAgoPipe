import { Component, OnInit, forwardRef, Input } from '@angular/core';
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
export class CustomDropdownComponent  implements ControlValueAccessor, OnInit {
  @Input('options') options;
  private _selectValue: any = '';
  private _onTouchedCallback: () => {};
  private _onChangeCallback: (_:any) => {};
  private _inputValue: any = '';
  private hasValue: any = "";
  private items: any;

  constructor(private _http: HttpClient) {

  }

  ngOnInit() {
    
    if(this.options.type === "a") {
      console.log(this.options);
      this._http.get("assets/data/dropdownData_a.json").subscribe((res) => {
        this.items = res;
      });
    } 

    if(this.options.type === "b") {
      console.log(this.options);
      this._http.get("assets/data/dropdownData_b.json").subscribe((res) => {
        this.items = res;
      });
    }
    
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

  // ngAfterViewInit() {
  //   this._inputValue = this.options.defaultValue;
  // }


  
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