import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSmartBraceletsComponent } from './get-smart-bracelets.component';

describe('GetSmartBraceletsComponent', () => {
  let component: GetSmartBraceletsComponent;
  let fixture: ComponentFixture<GetSmartBraceletsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetSmartBraceletsComponent]
    });
    fixture = TestBed.createComponent(GetSmartBraceletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
