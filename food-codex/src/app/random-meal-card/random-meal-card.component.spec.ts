import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomMealCardComponent } from './random-meal-card.component';

describe('RandomMealCardComponent', () => {
  let component: RandomMealCardComponent;
  let fixture: ComponentFixture<RandomMealCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomMealCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomMealCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
