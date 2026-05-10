import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaModificable } from './lista-modificable';

describe('ListaModificable', () => {
  let component: ListaModificable;
  let fixture: ComponentFixture<ListaModificable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaModificable],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaModificable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
