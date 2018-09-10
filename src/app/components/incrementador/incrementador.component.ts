import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambiaValor: EventEmitter<number> = new EventEmitter();

  @ViewChild('txtProgress') txtProgress: ElementRef;

  constructor() {
  }

  ngOnInit() {
    // console.log('leyenda ' + this.leyenda);
    // console.log('progreso ' + this.progreso);
  }

  onChange( nuevoNumero: number ) {

    // tslint:disable-next-line:prefer-const
    // Manipular el elemento con vanilla javascript, no es util si tengo en el parent dos componentes de este tipo
    // let elemHTML: any = document.getElementsByName('progreso')[0];



    if (nuevoNumero >= 100) {
      this.progreso = 100;
    } else if (nuevoNumero <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoNumero;
    }

    // Manipular el elemento con vanilla javascript, no es util si tengo en el parent dos componentes de este tipo
    // elemHTML.value = this.progreso;


    // Manipulo elemento con ViewChild tipo ElementRef
    this.txtProgress.nativeElement.value = this.progreso;

    this.cambiaValor.emit(this.progreso);

    this.txtProgress.nativeElement.focus();



  }


  cambiarValor ( value ) {
    // console.log('progreso = ' + this.progreso);
    console.log('value = ' + value);

    if (this.progreso + value >= 0 && this.progreso + value <= 100) {
      this.progreso += value;
      this.cambiaValor.emit(this.progreso);
    }

    this.txtProgress.nativeElement.focus();

  }
}
