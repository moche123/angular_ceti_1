import { Component, Input, OnInit, Output,EventEmitter, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit,OnChanges,OnDestroy {

  @Input() numeroPadreAlHijo:number = 0;

  @Output() numeroHijoAlPadre: EventEmitter<number> = new EventEmitter();

  public numeroAEnviarAlPadre:number = 8;

  constructor() {
    console.log('CONSTRUCTOR HIJO');
   }



   ngOnChanges(changes: SimpleChanges): void { //! Se ejecuta por primera vez al inicio, y cada vez que hayan cambios
    console.log('ON CHANGES HIJO');
    console.log(changes)
  }

   ngOnInit(): void {
   console.log('ESTE ES EL ONINIT EN EL HIJO')
  }

  public enviarAlPadre():void{
      this.numeroHijoAlPadre.emit(this.numeroAEnviarAlPadre)
  }

  ngOnDestroy(): void { //! DISPARAR EVENTOS CUANDO EL COMPONENTE SE DESTRUYA
    console.log('COMPONENTE DESTRUIDO')

    //! Cuando salimos de la pagina y se quiere detectar la hora de salida
    //! PARA DESUSCRIBIRTE A LOS OBSERVABLES
  }
  

}
