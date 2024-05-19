import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMallsComponent } from './get-malls.component';

describe('GetMallsComponent', () => {
  let component: GetMallsComponent;
  let fixture: ComponentFixture<GetMallsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetMallsComponent]
    });
    fixture = TestBed.createComponent(GetMallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
