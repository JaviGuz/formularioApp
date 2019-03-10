import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { getMaxListeners } from 'cluster';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  usuario: Object = {
    nombre: 'Javier',
    apellido: 'Guzman',
    correo: 'xavigu@gmail.com'


  };

  constructor() { }


  guardar(forma: NgForm) {
     console.log('ngForm: ', forma);
     console.log('valores de campos: ', forma.value);
     console.log('datos usuario object: ', this.usuario);
  }

}
