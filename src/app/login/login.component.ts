import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  cliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteService, private router: Router) { }

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
        this.router.navigate(['/tendencia']);
      })
  }


}
