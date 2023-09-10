import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextSectionComponent } from './next-section.component';

describe('NextSectionComponent', () => {
  let component: NextSectionComponent;
  let fixture: ComponentFixture<NextSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
