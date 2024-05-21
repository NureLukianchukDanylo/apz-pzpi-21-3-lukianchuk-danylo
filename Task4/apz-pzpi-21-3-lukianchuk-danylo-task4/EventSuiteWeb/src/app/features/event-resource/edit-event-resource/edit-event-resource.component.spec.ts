import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEventResourceComponent } from './edit-event-resource.component';

describe('EditEventResourceComponent', () => {
  let component: EditEventResourceComponent;
  let fixture: ComponentFixture<EditEventResourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditEventResourceComponent]
    });
    fixture = TestBed.createComponent(EditEventResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
