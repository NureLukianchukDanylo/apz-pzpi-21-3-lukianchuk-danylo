import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTicketsComponent } from './get-tickets.component';

describe('GetTicketsComponent', () => {
  let component: GetTicketsComponent;
  let fixture: ComponentFixture<GetTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetTicketsComponent]
    });
    fixture = TestBed.createComponent(GetTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
