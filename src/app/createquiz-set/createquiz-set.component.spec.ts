import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatequizSetComponent } from './createquiz-set.component';

describe('CreatequizSetComponent', () => {
  let component: CreatequizSetComponent;
  let fixture: ComponentFixture<CreatequizSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatequizSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatequizSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
