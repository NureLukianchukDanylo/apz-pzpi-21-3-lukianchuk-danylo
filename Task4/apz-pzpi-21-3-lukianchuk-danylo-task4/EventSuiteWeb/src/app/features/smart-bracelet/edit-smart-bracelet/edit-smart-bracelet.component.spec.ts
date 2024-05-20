import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSmartBraceletComponent } from './edit-smart-bracelet.component';

describe('EditSmartBraceletComponent', () => {
  let component: EditSmartBraceletComponent;
  let fixture: ComponentFixture<EditSmartBraceletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSmartBraceletComponent]
    });
    fixture = TestBed.createComponent(EditSmartBraceletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
