import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guitarra } from './guitarra';

describe('Guitarra', () => {
  let component: Guitarra;
  let fixture: ComponentFixture<Guitarra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guitarra],
    }).compileComponents();

    fixture = TestBed.createComponent(Guitarra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
