import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceCalculComponent } from './exercice-calcul.component';

describe('ExerciceCalculComponent', () => {
  let component: ExerciceCalculComponent;
  let fixture: ComponentFixture<ExerciceCalculComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciceCalculComponent]
    });
    fixture = TestBed.createComponent(ExerciceCalculComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
