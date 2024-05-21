import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventResourceComponent } from './add-event-resource.component';

describe('AddEventResourceComponent', () => {
  let component: AddEventResourceComponent;
  let fixture: ComponentFixture<AddEventResourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEventResourceComponent]
    });
    fixture = TestBed.createComponent(AddEventResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
