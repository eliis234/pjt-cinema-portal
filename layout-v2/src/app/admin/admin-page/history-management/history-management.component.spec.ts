import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryManagementComponent } from './history-management.component';

describe('HistoryManagementComponent', () => {
  let component: HistoryManagementComponent;
  let fixture: ComponentFixture<HistoryManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
