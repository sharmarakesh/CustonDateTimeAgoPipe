import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSwitchExampleComponent } from './custom-switch-example.component';

describe('CustomSwitchExampleComponent', () => {
  let component: CustomSwitchExampleComponent;
  let fixture: ComponentFixture<CustomSwitchExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSwitchExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSwitchExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
