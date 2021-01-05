import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuizSetsComponent } from './view-quiz-sets.component';

describe('ViewQuizSetsComponent', () => {
  let component: ViewQuizSetsComponent;
  let fixture: ComponentFixture<ViewQuizSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewQuizSetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQuizSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
