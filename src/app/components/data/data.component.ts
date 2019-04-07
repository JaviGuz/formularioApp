import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName, FormArray } from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent  {

  forma: FormGroup;

  usuario: Object = {

    nombreCompleto: {
      nombre: 'Javier',
      apellido: 'Guzman'
    },

    correo: 'javier.guzman@gmail.com',
    pasatiempos: ['viciar', 'dormir', 'comer']
  };

  constructor() {

    console.log(this.usuario.nombreCompleto);

    this.forma = new FormGroup({

      'nombreCompleto': new FormGroup({

        'nombre': new FormControl('', [
              Validators.required,
              Validators.minLength(3)
            ]),
            'apellido': new FormControl('', Validators.required),

      }),


      'correo': new FormControl('', [
                                      Validators.required,
                                      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                    ]),
      'pasatiempos': new FormArray  ([
        new FormControl('Jalar', Validators.required)
      ])
    });

  // this.forma.setValue(this.usuario);//setea en el formulario(forma)el contenido del objeto usuario,siempre que tenga la misma estructura

   }

    agregarPasatiempo() {
      (<FormArray>this.forma.controls['pasatiempos']).push(
        new FormControl('Beber', Validators.required)
      );         // Las <> es para decirle que es un array y a parte del tipo FormArray
    }

   guardarCambios() {
     console.log(this.forma);
     this.forma.reset(this.usuario); // Una vez guardado el formulario se resetea a sus valores iniciales por defecto
   }

}
