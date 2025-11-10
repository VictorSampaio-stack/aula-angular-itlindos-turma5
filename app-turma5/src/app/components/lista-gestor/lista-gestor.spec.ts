import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGestor } from './lista-gestor';

describe('ListaGestor', () => {
  let component: ListaGestor;
  let fixture: ComponentFixture<ListaGestor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaGestor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaGestor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
