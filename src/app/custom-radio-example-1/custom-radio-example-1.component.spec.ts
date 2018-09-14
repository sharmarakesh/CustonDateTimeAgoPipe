import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRadioExample1Component } from './custom-radio-example-1.component';

describe('CustomRadioExample1Component', () => {
  let component: CustomRadioExample1Component;
  let fixture: ComponentFixture<CustomRadioExample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomRadioExample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRadioExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
