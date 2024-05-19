import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFinishedEventsComponent } from './get-finished-events.component';

describe('GetFinishedEventsComponent', () => {
  let component: GetFinishedEventsComponent;
  let fixture: ComponentFixture<GetFinishedEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetFinishedEventsComponent]
    });
    fixture = TestBed.createComponent(GetFinishedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
