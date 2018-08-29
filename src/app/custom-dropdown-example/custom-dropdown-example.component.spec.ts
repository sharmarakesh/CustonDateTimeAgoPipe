import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDropdownExampleComponent } from './custom-dropdown-example.component';

describe('CustomDropdownExampleComponent', () => {
  let component: CustomDropdownExampleComponent;
  let fixture: ComponentFixture<CustomDropdownExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDropdownExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDropdownExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
