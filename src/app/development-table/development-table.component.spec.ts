import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentTableComponent } from './development-table.component';

describe('DevelopmentTableComponent', () => {
  let component: DevelopmentTableComponent;
  let fixture: ComponentFixture<DevelopmentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
