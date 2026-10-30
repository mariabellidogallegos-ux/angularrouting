import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelecNumerosDoblesComponent } from './selec-numeros-dobles-component';

describe('SelecNumerosDoblesComponent', () => {
  let component: SelecNumerosDoblesComponent;
  let fixture: ComponentFixture<SelecNumerosDoblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelecNumerosDoblesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelecNumerosDoblesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
