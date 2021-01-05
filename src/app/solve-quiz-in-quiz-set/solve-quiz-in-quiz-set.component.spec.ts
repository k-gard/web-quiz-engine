import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolveQuizInQuizSetComponent } from './solve-quiz-in-quiz-set.component';

describe('SolveQuizInQuizSetComponent', () => {
  let component: SolveQuizInQuizSetComponent;
  let fixture: ComponentFixture<SolveQuizInQuizSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolveQuizInQuizSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolveQuizInQuizSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
