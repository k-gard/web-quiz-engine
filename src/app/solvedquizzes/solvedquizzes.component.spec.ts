import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolvedquizzesComponent } from './solvedquizzes.component';

describe('SolvedquizzesComponent', () => {
  let component: SolvedquizzesComponent;
  let fixture: ComponentFixture<SolvedquizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolvedquizzesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolvedquizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
