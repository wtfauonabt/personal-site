import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingShapesComponent } from './moving-shapes.component';

describe('MovingShapesComponent', () => {
  let component: MovingShapesComponent;
  let fixture: ComponentFixture<MovingShapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovingShapesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingShapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
