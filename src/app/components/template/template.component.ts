import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent {

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    usuario: '',
    sexo: 'Hombre',
    aceptar: false
  };

  paises = [{
    codigo: 'ESP',
    nombre: 'Spain',
  },
  {
    codigo: 'FR',
    nombre: 'France',
  }];

  sexos: string[] = ['Hombre', 'Mujer', 'Trans'];

  constructor() { }


  guardar(forma: NgForm) {
     console.log('ngForm: ', forma);
     console.log('valores de campos: ', forma.value);
     console.log('datos usuario object: ', this.usuario);
  }

}
