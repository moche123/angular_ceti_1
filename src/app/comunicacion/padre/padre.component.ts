import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit
// ,OnChanges
 {

  public numeroPadreAlHijo: number = 7;
  public numeroRecibidoDelHijo: number = 0;
  constructor() { //! EL PRIMERO
    //console.log('ESTE ES EL CONSTRUCTOR EN EL PADRE')
  }
   ngOnChanges(changes: SimpleChanges): void { //! SEGUNDO (SI HAY CAMBIO) Se ejecuta una vez al inicio, y cada vez que hayan cambios
     //console.log('ON CHANGES PADRE');
     //console.log(changes)
   }



  ngOnInit(): void {//! 3ro
    //console.log('ESTE ES EL ONINIT EN EL PADRE')
  }

  recibirDelHijo(recibido:any){
    this.numeroRecibidoDelHijo = recibido
  }

  cambiarNumeroQuePadreEnviaHijo(){
    this.numeroPadreAlHijo = Math.random()*10;
  }

}
