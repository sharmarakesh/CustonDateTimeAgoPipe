import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRadioExampleComponent } from './custom-radio-example.component';

describe('CustomRadioExampleComponent', () => {
  let component: CustomRadioExampleComponent;
  let fixture: ComponentFixture<CustomRadioExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomRadioExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRadioExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
