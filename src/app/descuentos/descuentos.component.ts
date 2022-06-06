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
        nombre: "Arazá",
        descripcion: "Los ideales para un día que quieras estar más relajada y cómoda y al mismo tiempo verte bien, logrando ese look casual chic que tanto llama la atención.",
        imagen: "../../../assets/img/zapatos/araza.jpg",
        imagenCarru1: "../../../assets/img/prueba.jpg",
        precio: 70000,
        cantidad:5,
        color:["Arazá Carbon (Negro)","Arazá Navy (Azul)","Arazá Sand (Café)"],
        descuento: "30%"
      },{
        nombre: "Tamarindo",
        descripcion: "Nuestros Arce son nuestros famosos EVERY DAY SHOES, llamados así precisamente por ser esos zapatos infaltables en tu closet, perfectos para el dia a dia y para cualquier ocasión.",
        imagen: "../../../assets/img/zapatos/tamarindo.jpg",
        imagenCarru1: "../../../assets/img/zapatos/blanco.jpg",
        imagenCarru2: "../../../assets/img/zapatos/ebano.jpg",
        precio: 85000,
        cantidad:2,
        color:["Tamarindo Navy (Azul)", "Tamarindo Pale (Beige)","Tamarindo Peach (Nude)","Tamarindo Sand (Arena)","Tamarindo Sunshine (Dorado)"],
        descuento: "20%"
      },{
        nombre: "Pino",
        descripcion: "Esta referencia es perfecta para lograr un look casual formal, úsalas con colores básicos que combinan con todo, es el complemento perfecto en tu closet, ideales para ir a la oficina o para salir a cenar; están hechos de cuero con un terminado graso y una suela en TR (termoplástico) bicolor para que combine con tu look, altura baja.",
        imagen: "../../../assets/img/zapatos/pino.jpg",
        imagenCarru1: "../../../assets/img/zapatos/blanco.jpg",
        imagenCarru2: "../../../assets/img/zapatos/ebano.jpg",
        precio: 90000,
        cantidad:7,
        color:["Pino Coñag"],
        descuento: "20%"
      },{
        nombre: "Cedro",
        descripcion: "Bota casual elaborada en cuero nobuck con aplique en el talón, lo que le da el carácter. Su suela es ligera bicolor y con una apariencia deportiva, cuenta con una vira con acento de color perfectas para complementar tus looks casuales y de fin de semana.",
        imagen: "../../../assets/img/zapatos/cedro.jpg",
        imagenCarru1: "../../../assets/img/zapatos/ebano.jpg",
        precio: 90000,
        cantidad:3 ,
        color:["Cedro Capuccino", "Cedro Carbon","Cedro Navy"],
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
