import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../question-base';
import { FormGroup } from '../../../../node_modules/@angular/forms';
import { QuestionControlService } from '../question-control.service';

@Component({
  selector: 'app-dynamic-form-test',
  templateUrl: './dynamic-form-test.component.html',
  styleUrls: ['./dynamic-form-test.component.css']
})
export class DynamicFormTestComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
 
  constructor(private qcs: QuestionControlService) {  }
 
  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }
 
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
