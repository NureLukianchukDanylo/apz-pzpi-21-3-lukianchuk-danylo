import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRegistrationsComponent } from './get-registrations.component';

describe('GetRegistrationsComponent', () => {
  let component: GetRegistrationsComponent;
  let fixture: ComponentFixture<GetRegistrationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetRegistrationsComponent]
    });
    fixture = TestBed.createComponent(GetRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
