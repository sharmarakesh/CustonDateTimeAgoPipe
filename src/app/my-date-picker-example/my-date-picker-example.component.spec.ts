import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDatePickerExampleComponent } from './my-date-picker-example.component';

describe('MyDatePickerExampleComponent', () => {
  let component: MyDatePickerExampleComponent;
  let fixture: ComponentFixture<MyDatePickerExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDatePickerExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDatePickerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
