import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumInputComponent } from './custum-input.component';

describe('CustumInputComponent', () => {
  let component: CustumInputComponent;
  let fixture: ComponentFixture<CustumInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustumInputComponent]
    });
    fixture = TestBed.createComponent(CustumInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
