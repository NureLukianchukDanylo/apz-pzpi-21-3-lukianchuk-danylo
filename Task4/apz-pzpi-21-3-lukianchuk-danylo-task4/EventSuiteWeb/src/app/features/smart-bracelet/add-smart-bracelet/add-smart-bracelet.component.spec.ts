import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSmartBraceletComponent } from './add-smart-bracelet.component';

describe('AddSmartBraceletComponent', () => {
  let component: AddSmartBraceletComponent;
  let fixture: ComponentFixture<AddSmartBraceletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSmartBraceletComponent]
    });
    fixture = TestBed.createComponent(AddSmartBraceletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
