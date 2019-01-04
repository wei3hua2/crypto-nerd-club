import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangePairsComponent } from './exchange-pairs.component';

describe('ExchangePairsComponent', () => {
  let component: ExchangePairsComponent;
  let fixture: ComponentFixture<ExchangePairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangePairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangePairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
