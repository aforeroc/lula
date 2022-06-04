import { Component, OnInit } from '@angular/core';
import { CarroService } from '../services/carro.service';
import { DatatransferService } from '../services/datatransfer.service';

@Component({
  selector: 'app-caballero',
  templateUrl: './caballero.component.html',
  styleUrls: ['./caballero.component.css']
})
export class CaballeroComponent implements OnInit {

  productos: any[] = [];

  constructor(private carro:CarroService, private dataTransfer: DatatransferService) {


    this.productos = [{
      nombre: "Almendro",
      descripcion: "Una silueta atemporal de inspiración deportiva y detalles retro, elaborada en cuero de brillo sutil, en mezcla con textura minimal. El contraste de color en su suela y sus terminados manuales le dan un toque de valor a tu día a día, siendo un indispensable en tu fondo de armario.",
      imagen: "../../../assets/img/zapatos/almendro.jpg",
      imagenCarru1: "../../../assets/img/prueba.jpg",


      precio: 120000
    }, {
      nombre: "Brandy",
      descripcion: "Zapatos tipo mocasin, los clásicos atemporales disponibles solo en color rojo, ideales para hombres y mujeres que buscan comodidad sin tener que sacrificar el estilo y buen gusto, outfits más formales, hechos en cuero nobuck de alta calidad  con un acabado en textura de jean, suela en caucho e incrustada lo cual los hace diferentes ofreciendo una gran variedad de opciones que se ajustan a cualquier perfil.",
      imagen: "../../../assets/img/zapatos/brandy.jpg",
      imagenCarru1: "../../../assets/img/zapatos/blanco.jpg",

      precio: 120000
    }, {
      nombre: "Ébano",
      descripcion: "Elegante, sofisticada y elaborada con cueros 100% Colombianos seleccionados de la más alta calidad, liso, y con una minuciosa atención a los detalles, esta línea ofrece diseños para usar con traje de dos piezas o para atuendos formales. Con suela de TR e interior abullonado para total comodidad.",
      imagen: "../../../assets/img/zapatos/ebano.jpg",
      imagenCarru1: "../../../assets/img/zapatos/blanco.jpg",

      precio: 130000
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
