import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInput } from './lista-input';

describe('ListaInput', () => {
  let component: ListaInput;
  let fixture: ComponentFixture<ListaInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaInput],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
