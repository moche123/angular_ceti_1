import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit
// ,OnDestroy 
{

  public personajes:any[] = [];
  public tituloParaPipe:string = 'Estos son los personajes';
  public personajeObs$: any;

  constructor(private apiService:ApiService) { } //! INYECCION DE DEPENDENCIAS: Uso metodos de algo que no he creado yo

  ngOnInit(): void {
    this.personajeObs$ = this.apiService.getPersonajes()
    
    // .subscribe( (res:any) => {
    //   console.log(res)
    //   this.personajes = res;

    // }  )

  }

  //! PERDIDA DE MEMORIA (MEMORY LEAK)

  // ngOnDestroy(): void {
  //   this.observable$.unsubscribe();
  // }
}
