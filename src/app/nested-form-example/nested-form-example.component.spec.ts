import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormExampleComponent } from './nested-form-example.component';

describe('NestedFormExampleComponent', () => {
  let component: NestedFormExampleComponent;
  let fixture: ComponentFixture<NestedFormExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedFormExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
