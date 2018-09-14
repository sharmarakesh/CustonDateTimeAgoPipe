import {
  Component, Input, forwardRef, ElementRef, Renderer, OnInit
} from '@angular/core';
import {
  FormControl,
  NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor
} from '@angular/forms';

@Component({
  selector: 'radio',
  templateUrl: './custom-radio.component.html',
  styleUrls: ['./custom-radio.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomRadioComponent),
      multi: true
    }
  ]
})
export class CustomRadioComponent implements OnInit, ControlValueAccessor {

  @Input() data: any;
  out: any;
  @Input() radioName: any;
  
  onChange: (value:any) => void; // why 'fn'? was never assigned anywhere .. !
  
  validateFn: any = () => {};

  constructor(private _renderer: Renderer, private _elementRef: ElementRef) {}


  ngOnInit() {
  }

  writeValue(value: any): void {
    console.log("writeValue : "+value);
    this._renderer.setElementProperty(this._elementRef, 'checked', value == this._elementRef.nativeElement.value);
  }
  registerOnChange(fn: (value: any) => void) {
    //alert("HELLO : ");
    this.onChange = fn;
  }
  registerOnTouched() {}

}
