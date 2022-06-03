import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Cliente } from '../models/cliente.models';
import { UsuarioModel } from '../models/usuario.model';
import { AuthService } from '../services/auth.service';
import { ClienteService } from '../services/cliente.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  cliente: Cliente = new Cliente();

  constructor(private router:Router, private clienteService:ClienteService, private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.construirFormularioLogin();
  }

  private construirFormularioLogin() {
    this.loginForm = new FormGroup({
      correoElectronico: new FormControl('', Validators.maxLength(40)),
      password: new FormControl('', Validators.maxLength(16))
    });
  }

  
  login(): void {
    const correoFormulario = this.loginForm.controls.correoElectronico.value;
    const passwordFormulario = this.loginForm.controls.password.value;
    this.clienteService.login(correoFormulario, passwordFormulario).subscribe(data =>{
      this.cliente = data;
      console.log(this.cliente);
      this.router.navigate(['/']);
    },
    error => {
      this._snackBar.open(error.error, 'x', { duration: 4000, verticalPosition: "top" })
    }
    )
}





}
