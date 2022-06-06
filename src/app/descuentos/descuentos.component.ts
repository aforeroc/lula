import { Component, OnInit } from '@angular/core';
import { CarroService } from '../services/carro.service';
import { DatatransferService } from '../services/datatransfer.service';

@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.css']
})
export class DescuentosComponent implements OnInit {

  productos: any[] = [];

  constructor(private carro:CarroService, private dataTransfer: DatatransferService) {


    this.productos = [{
        nombre: "Araza",
        descripcion: "Los ideales para un día que quieras estar más relajada y cómoda y al mismo tiempo verte bien, logrando ese look casual chic que tanto llama la atención.",
        imagen: "../../../assets/img/zapatos/araza.jpg",
        imagenCarru1: "../../../assets/img/prueba.jpg",
        precio: 70000,
        cantidad:5,
        descuento: "30%"
      },{
        nombre: "Tamarindo",
        descripcion: "Nuestros Arce son nuestros famosos EVERY DAY SHOES, llamados así precisamente por ser esos zapatos infaltables en tu closet, perfectos para el dia a dia y para cualquier ocasión.",
        imagen: "../../../assets/img/zapatos/tamarindo.jpg",
        imagenCarru1: "../../../assets/img/zapatos/blanco.jpg",
        imagenCarru2: "../../../assets/img/zapatos/ebano.jpg",
        precio: 85000,
        cantidad:2,
        descuento: "20%"
      },{
        nombre: "Roble",
        descripcion: "Se imponen en el hombre moderno actual, por lo que no pueden faltar en tus looks, específicamente para que los utilices con jeans, con suela en TR bicolor y una mezcla de cuero graso y cuero nobuck en apliques, que los hará resaltar del resto de tu armario.",
        imagen: "../../../assets/img/zapatos/roble.jpg",
        imagenCarru1: "../../../assets/img/zapatos/blanco.jpg",
        imagenCarru2: "../../../assets/img/zapatos/ebano.jpg",
        precio: 90000,
        cantidad:7,
        descuento: "20%"
      },{
        nombre: "Cedro",
        descripcion: "Bota casual elaborada en cuero nobuck con aplique en el talón, lo que le da el carácter. Su suela es ligera bicolor y con una apariencia deportiva, cuenta con una vira con acento de color perfectas para complementar tus looks casuales y de fin de semana.",
        imagen: "../../../assets/img/zapatos/cedro.jpg",
        imagenCarru1: "../../../assets/img/zapatos/ebano.jpg",
        precio: 90000,
        cantidad:3 ,
        descuento: "30%"
      },
    ]

  }

  ngOnInit(): void {
  }

  mandarAModal(param: any) {
    this.dataTransfer.productsMostrar.emit({
      data: param
    })
  }

}
