import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})


export class ReactiveFormComponent implements OnInit {

  public formLogin!: FormGroup;
  correo!:string;

  constructor(private formBuilder:FormBuilder){

  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      name:['', 
        [
          Validators.required,
          Validators.minLength(12)
        ]
      ],
      email:['', 
        [
          Validators.required,
          Validators.email
        ]
      ],
      message:['', 
        [
          Validators.required,
          Validators.maxLength(500),
        ]
      ],
    })

    this.loadAPI()
  }

  //function para simular la carga de un API
  loadAPI():any{
    const response = {
      name: "Miguel DIAZ",
      email: 'mdiaz@gmail.com',
      message: "Escribe aquí tu mensaje...",
    };

    this.formLogin.patchValue(response);
    
  }

  send(): any{
    console.log(this.formLogin.value)
  }

}