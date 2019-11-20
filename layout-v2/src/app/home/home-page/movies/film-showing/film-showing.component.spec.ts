import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmShowingComponent } from './film-showing.component';

describe('FilmShowingComponent', () => {
  let component: FilmShowingComponent;
  let fixture: ComponentFixture<FilmShowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmShowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmShowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
