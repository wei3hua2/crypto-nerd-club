import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinsSummaryComponent } from './coins-summary.component';

describe('CoinsSummaryComponent', () => {
  let component: CoinsSummaryComponent;
  let fixture: ComponentFixture<CoinsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
