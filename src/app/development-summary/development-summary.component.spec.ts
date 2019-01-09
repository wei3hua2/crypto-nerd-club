import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentSummaryComponent } from './development-summary.component';

describe('DevelopmentSummaryComponent', () => {
  let component: DevelopmentSummaryComponent;
  let fixture: ComponentFixture<DevelopmentSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
