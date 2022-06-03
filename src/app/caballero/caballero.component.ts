import { Component, OnInit } from '@angular/core';
import { CarroService } from '../services/carro.service';
import { DatatransferService } from '../services/datatransfer.service';

@Component({
  selector: 'app-caballero',
  templateUrl: './caballero.component.html',
  styleUrls: ['./caballero.component.css']
})
export class CaballeroComponent implements OnInit {

  
  productos: any [] =[];

  constructor(private carro:CarroService, private dataTransfer:DatatransferService) {

    
    this.productos=[{
      nombre:"Z1Araza",
      descripcion:"Los ideales para un día que quieras estar más relajada y cómoda y al mismo tiempo verte bien, logrando ese look casual chic que tanto llama la atención.",
      imagen:"../../../assets/img/zapatos/araza.jpg",
      imagenCarru1:"../../../assets/img/prueba.jpg",
      

      precio: 90000
    },{
      nombre:"Z2Arce",
      descripcion:"Nuestros Arce son nuestros famosos EVERY DAY SHOES, llamados así precisamente por ser esos zapatos infaltables en tu closet, perfectos para el dia a dia y para cualquier ocasión.",
      imagen:"../../../assets/img/zapatos/blanco.jpg",
      imagenCarru1:"../../../assets/img/zapatos/blanco.jpg",

      precio:120000
    },{
      nombre:"Z3Ebano",
      descripcion:"Elegante, sofisticada y elaborada con cueros 100% Colombianos seleccionados de la más alta calidad, liso, y con una minuciosa atención a los detalles.",
      imagen:"../../../assets/img/zapatos/ebano.jpg",
      imagenCarru1:"../../../assets/img/zapatos/ebano.jpg",

      precio:120000
    },{
      nombre:"Z4Cardamomo",
      descripcion:"Nuestros Cardamomo son nuestros famosos EVERY DAY SHOES, llamados así precisamente por ser esos zapatos infaltables en tu closet, perfectos para el dia a dia y para cualquier ocasión.",
      imagen:"../../../assets/img/zapatos/cardamomo.jpg",
      imagenCarru1:"../../../assets/img/zapatos/blanco.jpg",

      precio:120000
    },{
      nombre:"Z5Arce",
      descripcion:"Nuestros Arce son nuestros famosos EVERY DAY SHOES, llamados así precisamente por ser esos zapatos infaltables en tu closet, perfectos para el dia a dia y para cualquier ocasión.",
      imagen:"../../../assets/img/zapatos/blanco.jpg",
      imagenCarru1:"../../../assets/img/zapatos/blanco.jpg",
      imagenCarru2:"../../../assets/img/zapatos/ebano.jpg",
      precio:120000
    }]

   }
   
  ngOnInit(): void {
  }

  mandarAModal(param:any){
    this.dataTransfer.productsMostrar.emit({
      data:param
    })
  }

}
