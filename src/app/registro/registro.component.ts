import { Component, OnInit } from '@angular/core';
import { ClienteService } from "../services/cliente.service";
import { Cliente } from '../models/cliente.model';
import { CiudadService } from '../services/ciudad.service';
import { Ciudad } from '../models/ciudad.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  cliente:Cliente = new Cliente();
  ciudades:Ciudad[] = [];

  mensaje: string = "";

  constructor(private clienteService: ClienteService, private ciudadService: CiudadService, private router:Router) { }

  ngOnInit(): void {
    this.listaCiudades();
  }


  listaCiudades(): void{
    this.ciudadService.listaCiudades().subscribe(data =>{
      data? this.ciudades = data: console.log("No hay ciudades para seleccionar");
    })
  }


  registrar(): void{
    this.clienteService.addCliente(this.cliente).subscribe(data =>{
      Swal.fire(
        '¡Felicitaciones!',
        'Su registro ha sido exitoso',
        'success'
      )
      this.router.navigate(['/sinformacion'])
    })
  }


}
