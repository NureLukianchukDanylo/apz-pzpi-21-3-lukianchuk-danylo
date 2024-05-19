import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRegistrationComponent } from './add-registration.component';

describe('AddRegistrationComponent', () => {
  let component: AddRegistrationComponent;
  let fixture: ComponentFixture<AddRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRegistrationComponent]
    });
    fixture = TestBed.createComponent(AddRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
