import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollingTabsComponent } from './rolling-tabs.component';

describe('RollingTabsComponent', () => {
  let component: RollingTabsComponent;
  let fixture: ComponentFixture<RollingTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollingTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollingTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
