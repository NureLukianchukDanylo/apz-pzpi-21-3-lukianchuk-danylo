import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLocationsComponent } from './get-locations.component';

describe('GetLocationsComponent', () => {
  let component: GetLocationsComponent;
  let fixture: ComponentFixture<GetLocationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetLocationsComponent]
    });
    fixture = TestBed.createComponent(GetLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
