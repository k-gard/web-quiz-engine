import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolveQuizSetComponent } from './solve-quiz-set.component';

describe('SolveQuizSetComponent', () => {
  let component: SolveQuizSetComponent;
  let fixture: ComponentFixture<SolveQuizSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolveQuizSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolveQuizSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
