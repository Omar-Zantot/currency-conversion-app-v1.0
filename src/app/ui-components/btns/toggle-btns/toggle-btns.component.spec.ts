import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleBtnsComponent } from './toggle-btns.component';

describe('ToggleBtnsComponent', () => {
  let component: ToggleBtnsComponent;
  let fixture: ComponentFixture<ToggleBtnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleBtnsComponent]
    });
    fixture = TestBed.createComponent(ToggleBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
