import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMallComponent } from './edit-mall.component';

describe('EditMallComponent', () => {
  let component: EditMallComponent;
  let fixture: ComponentFixture<EditMallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMallComponent]
    });
    fixture = TestBed.createComponent(EditMallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
