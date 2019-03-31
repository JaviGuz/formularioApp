import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent  {

  forma: FormGroup;

  constructor() {
    this.forma = new FormGroup({   // hay que pasar un objeto con cierta estructura
      'nombre': new FormControl('', [
                                      Validators.required,
                                      Validators.minLength(3)
                                    ]),
      'apellido': new FormControl('', Validators.required),
      'correo': new FormControl('', [
                                      Validators.required,
                                      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                    ])
    });

   }

   guardarCambios() {
     console.log(this.forma);
   }

}
