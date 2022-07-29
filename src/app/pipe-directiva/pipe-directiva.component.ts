import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-directiva',
  templateUrl: './pipe-directiva.component.html',
  styleUrls: ['./pipe-directiva.component.css']
})
export class PipeDirectivaComponent implements OnInit {

  public personas: any[] = [
    {
      nombre: "Juan",
      edad: 20
    },
    {
      nombre: "Pedro",

      edad: 40
    },
    {
      nombre: "Maria",
      edad: 30
    },

    {
      
      nombre: "Carlos",
      edad: 28
      
    }
  ]
  constructor() { }



  ngOnInit(): void {
  
  }

}
