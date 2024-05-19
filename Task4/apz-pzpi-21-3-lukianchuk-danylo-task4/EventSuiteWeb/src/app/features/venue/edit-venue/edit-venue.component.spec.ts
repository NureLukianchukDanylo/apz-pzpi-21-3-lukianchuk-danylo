import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVenueComponent } from './edit-venue.component';

describe('EditVenueComponent', () => {
  let component: EditVenueComponent;
  let fixture: ComponentFixture<EditVenueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditVenueComponent]
    });
    fixture = TestBed.createComponent(EditVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
