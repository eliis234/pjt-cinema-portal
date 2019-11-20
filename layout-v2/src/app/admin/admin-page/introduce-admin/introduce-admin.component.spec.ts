import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduceAdminComponent } from './introduce-admin.component';

describe('IntroduceAdminComponent', () => {
  let component: IntroduceAdminComponent;
  let fixture: ComponentFixture<IntroduceAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroduceAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroduceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
