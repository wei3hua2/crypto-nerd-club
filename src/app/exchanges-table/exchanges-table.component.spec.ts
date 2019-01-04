import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangesTableComponent } from './exchanges-table.component';

describe('ExchangesTableComponent', () => {
  let component: ExchangesTableComponent;
  let fixture: ComponentFixture<ExchangesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
