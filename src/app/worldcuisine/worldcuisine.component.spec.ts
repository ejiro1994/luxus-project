import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldcuisineComponent } from './worldcuisine.component';

describe('WorldcuisineComponent', () => {
  let component: WorldcuisineComponent;
  let fixture: ComponentFixture<WorldcuisineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldcuisineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldcuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
