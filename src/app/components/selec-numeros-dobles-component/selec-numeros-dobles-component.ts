import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-selec-numeros-dobles-component',
  standalone: false,
  styleUrl: './selec-numeros-dobles-component.css',
  templateUrl: './selec-numeros-dobles-component.html',
})
export class SelecNumerosDoblesComponent {
  @ViewChild("selectnumero") selectnumero!: ElementRef;
  doble: number;
  constructor() {
    this.doble = 0;
    }
    mostrarDoble():void{
      let numero = (this.selectnumero.nativeElement.value);
      this.doble = numero;
}
  
  
}
