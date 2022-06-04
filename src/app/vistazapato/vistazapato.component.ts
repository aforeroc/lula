import { Component, OnInit } from '@angular/core';
import { DatatransferService } from '../services/datatransfer.service';

@Component({
  selector: 'app-vistazapato',
  templateUrl: './vistazapato.component.html',
  styleUrls: ['./vistazapato.component.css']
})
export class VistazapatoComponent implements OnInit {

  array: Array<any> = [];

  constructor(private dataTransfer: DatatransferService) {}

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

  addCarrito() {
    this.dataTransfer.productsMostrar.subscribe(data => {
      console.log(data)
      this.insertOrUpdate(data.data)
      

    })
  }
  
  mandarAModal(param:any){
    this.dataTransfer.productsMostrarCarro.emit({
      data:param
    })
  }

}
