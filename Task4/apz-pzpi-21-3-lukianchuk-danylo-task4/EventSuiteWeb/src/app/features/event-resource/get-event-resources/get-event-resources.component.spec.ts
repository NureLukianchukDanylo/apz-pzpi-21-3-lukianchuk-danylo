import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEventResourcesComponent } from './get-event-resources.component';

describe('GetEventResourcesComponent', () => {
  let component: GetEventResourcesComponent;
  let fixture: ComponentFixture<GetEventResourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetEventResourcesComponent]
    });
    fixture = TestBed.createComponent(GetEventResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
