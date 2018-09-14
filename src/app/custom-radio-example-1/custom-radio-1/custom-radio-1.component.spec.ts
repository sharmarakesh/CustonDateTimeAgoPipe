import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRadio1Component } from './custom-radio-1.component';

describe('CustomRadio1Component', () => {
  let component: CustomRadio1Component;
  let fixture: ComponentFixture<CustomRadio1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomRadio1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRadio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
