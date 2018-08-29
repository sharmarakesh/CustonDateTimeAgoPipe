import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormTest1Component } from './dynamic-form-test-1.component';

describe('DynamicFormTest1Component', () => {
  let component: DynamicFormTest1Component;
  let fixture: ComponentFixture<DynamicFormTest1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormTest1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
