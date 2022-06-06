import { Component, OnInit } from '@angular/core';
import { DatatransferService } from '../services/datatransfer.service';
import { CarroService } from '../services/carro.service';

@Component({
  selector: 'app-mujer',
  templateUrl: './mujer.component.html',
  styleUrls: ['./mujer.component.css']
})
export class MujerComponent implements OnInit {

  productos: any[] = [];

  constructor(private carro:CarroService ,private dataTransfer: DatatransferService) {


    this.productos = [{
      nombre: "Cardamomo",
      descripcion: "Nuestros Arce son nuestros famosos EVERY DAY SHOES, llamados así precisamente por ser esos zapatos infaltables en tu closet, perfectos para el dia a dia y para cualquier ocasión.",
      imagen: "../../../assets/img/zapatos/cardamomo.jpg",
      cantidad:10,
      imagenCarru1: "../../../assets/img/zapatos/blanco.jpg",

      precio: 90000
    }, {
      nombre: "Ananá",
      descripcion: "Los ananá para las más arriesgadas que les gustan los zapatos un poco más deportivos sin perder el estilo, hechos en cuero sintético, perfectos para combinar con un look casual o si prefieres mas formal que le da un toque divertido, disponible en tres referencias Ananá Carbon (negros ), Ananá Snow( Blancos) y Ananá Sparkies (suela de colores).",
      imagen: "../../../assets/img/zapatos/anana.jpg",
      cantidad:8,
      imagenCarru1: "../../../assets/img/zapatos/ebano.jpg",

      precio: 90000
    }, {
      nombre: "Açai",
      descripcion: "Açai, una referencia inspirada en esos sabores deliciosos de las frutas exóticas, disponible en colores basicos que combinan con todo, hechos en cuero sintetico, libre de crueldad animal y con estampados florales y animal print que no pasan de moda, suela en pvc y altura media.",
      imagen: "../../../assets/img/zapatos/acai.jpg",
      cantidad:2,
      imagenCarru1: "../../../assets/img/zapatos/blanco.jpg",

      precio: 90000
    }]

  }

  ngOnInit(): void {
  }

  mandarAModal(param: any) {
    this.dataTransfer.productsMostrar.emit({
      data: param
    })
  }

}
