import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCardComponent } from './currency-card.component';

describe('CurrencyCardComponent', () => {
  let component: CurrencyCardComponent;
  let fixture: ComponentFixture<CurrencyCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyCardComponent]
    });
    fixture = TestBed.createComponent(CurrencyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
