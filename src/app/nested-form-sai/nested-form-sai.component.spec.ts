import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormSaiComponent } from './nested-form-sai.component';

describe('NestedFormSaiComponent', () => {
  let component: NestedFormSaiComponent;
  let fixture: ComponentFixture<NestedFormSaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedFormSaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedFormSaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
