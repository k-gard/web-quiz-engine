import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolvequizComponent } from './solvequiz.component';

describe('SolvequizComponent', () => {
  let component: SolvequizComponent;
  let fixture: ComponentFixture<SolvequizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolvequizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolvequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
