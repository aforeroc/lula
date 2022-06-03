import { Component, OnInit, } from '@angular/core';
import { CarroService } from 'src/app/services/carro.service';
import { DatatransferService } from 'src/app/services/datatransfer.service';


@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  collapsed = true;
  productos: any [] =[];
  array: Array<any> = [];

  

  constructor(private carro:CarroService ,private dataTransfer:DatatransferService) {

   }

  ngOnInit(): void {
  this.addCarrito()

  }

  insertOrUpdate(elemento: any) {
    const i = this.array.findIndex((e) => e.nombre !== elemento.nombre);
    const j = this.array.findIndex((e) => e.nombre === elemento.nombre);
    if (i > -1  ||  j>-1) {
      this.array[i] = elemento;
    } else this.array.push(elemento);
  }

  insertOrUpdatee(elemento: any) {
    const j = this.array.findIndex((e) => e.nombre === elemento.nombre);
    if (j > -1  ) {
      this.array[j] = elemento;
    } else this.array.push(elemento);
  }


  addCarrito() {
    this.dataTransfer.productsMostrarCarro.subscribe(data => {
      console.log(data)
      this.insertOrUpdatee(data.data)
      

    })
  }

  eliminarCarrito(elemento:any){
    const i = this.array.find(e => e.nombre === elemento.nombre);
    this.array.slice
    
  }



}
