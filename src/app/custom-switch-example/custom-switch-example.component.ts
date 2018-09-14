import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-custom-switch-example',
  templateUrl: './custom-switch-example.component.html',
  styleUrls: ['./custom-switch-example.component.css']
})
export class CustomSwitchExampleComponent implements OnInit {

  myForm: FormGroup
  value = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      mySwitch: [true]
    });
  }

  submit() {
    alert(`Value: ${this.myForm.controls.mySwitch.value}`);
    console.log(`Value: ${this.myForm.controls.mySwitch.value}`);
  }

}
