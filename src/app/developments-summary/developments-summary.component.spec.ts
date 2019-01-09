import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentsSummaryComponent } from './developments-summary.component';

describe('DevelopmentsSummaryComponent', () => {
  let component: DevelopmentsSummaryComponent;
  let fixture: ComponentFixture<DevelopmentsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
