import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinSummaryComponent } from './coin-summary.component';

describe('CoinSummaryComponent', () => {
  let component: CoinSummaryComponent;
  let fixture: ComponentFixture<CoinSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
