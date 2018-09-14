import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplossesComponent } from './complosses.component';

describe('ComplossesComponent', () => {
  let component: ComplossesComponent;
  let fixture: ComponentFixture<ComplossesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplossesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplossesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
