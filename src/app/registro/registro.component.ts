import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Ciudad } from '../models/ciudad.models';
import { Cliente } from '../models/cliente.models';
import { UsuarioModel } from '../models/usuario.model';
import { AuthService } from '../services/auth.service';
import { CiudadService } from '../services/ciudad.service';
import { ClienteService } from '../services/cliente.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  ciudades:Ciudad[] = [];
  cliente: Cliente = new Cliente();
  mensaje: string = "";


  constructor(private ciudadservice:CiudadService ,
              private clienteservice:ClienteService,
              private router:Router) { }

  ngOnInit(): void {
    this.listaCiudades();
  }

  onSubmit(form:NgForm){

  }


  listaCiudades(): void{
    this.ciudadservice.listaCiudades().subscribe(data =>{
      data? this.ciudades = data: console.log("No hay ciudades para seleccionar");
      console.log(data)
    })
  }

  registrar(): void{
    this.clienteservice.addCliente(this.cliente).subscribe(data =>{
      Swal.fire(
        '¡Felicitaciones!',
        'Su registro ha sido exitoso',
        'success'
      )
      this.router.navigate(['/'])
    })
  }


}
