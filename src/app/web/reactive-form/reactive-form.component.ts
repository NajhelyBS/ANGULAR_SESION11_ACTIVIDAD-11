import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})


export class ReactiveFormComponent implements OnInit {

  //creating our form
  public formValidation!: FormGroup;

  constructor(private formBuilder:FormBuilder){

  }

  //Dando Validaciones
  ngOnInit(): void {


    this.formValidation = this.formBuilder.group({
      name:['', [Validators.required, Validators.minLength(12)]],

      email:['', [Validators.required, Validators.email]],
      
      message:['', [Validators.required, Validators.maxLength(500),]],})
   
    this.loadAPI();
    this.Mensajes();


  }

  //valores cargados al iniciar la aplicación 
  loadAPI():any{
    const response = {
      name: "Najhely Banda",
      email: 'nbanda@gmail.com',
      message: "Escribe aquí tu mensaje...",
    };

    this.formValidation.patchValue(response);
    
  }

  Mensaje ="";

  Mensajes(){
    if(this.formValidation.valid == true){
      this.Mensaje = "Todos los datos son válidos";    
    }
    
    if (this.formValidation.invalid == true){
      this.Mensaje = "Todos los datos son inválidos";
    }
  }
  send():any{
    alert("Formulario completado");
  }
}