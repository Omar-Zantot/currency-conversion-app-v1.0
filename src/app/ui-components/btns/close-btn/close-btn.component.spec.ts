import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseBtnComponent } from './close-btn.component';

describe('CloseBtnComponent', () => {
  let component: CloseBtnComponent;
  let fixture: ComponentFixture<CloseBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloseBtnComponent]
    });
    fixture = TestBed.createComponent(CloseBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
