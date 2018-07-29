import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollingTabsNewComponent } from './rolling-tabs-new.component';

describe('RollingTabsNewComponent', () => {
  let component: RollingTabsNewComponent;
  let fixture: ComponentFixture<RollingTabsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollingTabsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollingTabsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
