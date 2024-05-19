import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetVenuesComponent } from './get-venues.component';

describe('GetVenuesComponent', () => {
  let component: GetVenuesComponent;
  let fixture: ComponentFixture<GetVenuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetVenuesComponent]
    });
    fixture = TestBed.createComponent(GetVenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
