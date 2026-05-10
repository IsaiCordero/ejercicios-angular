import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Generar } from './generar';

describe('Generar', () => {
  let component: Generar;
  let fixture: ComponentFixture<Generar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Generar],
    }).compileComponents();

    fixture = TestBed.createComponent(Generar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
