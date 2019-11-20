import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmComingComponent } from './film-coming.component';

describe('FilmComingComponent', () => {
  let component: FilmComingComponent;
  let fixture: ComponentFixture<FilmComingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmComingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmComingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
