import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../models/usuario.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario!:UsuarioModel 

  constructor(private auth :AuthService) { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel();

  }

  login(form:NgForm){
    
    if(form.invalid){return;}
    //carga logo error
    Swal.fire({
      allowOutsideClick: false,
      icon:'info',
      text: 'Espere por favor.. '
    });
    Swal.showLoading();
    //
    
    this.auth.login(this.usuario).subscribe(resp=>{
      console.log(resp);
      Swal.close();
    }, (err)=>{

    console.log(err.error.error.message);

    Swal.fire({
      icon:'error',
      title:'Error al auntenticar',
      text: err.error.error.message
    });


    });


  }

}
