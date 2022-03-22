import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-sinformacion',
  templateUrl: './sinformacion.component.html',
  styleUrls: ['./sinformacion.component.css']
})
export class SinformacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

       
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-76.5299411 ,3.475513], // starting position
    zoom: 15 // starting zoom
    });
  }

}

mapboxgl.accessToken = 'pk.eyJ1IjoiYWZvcmVyb2MiLCJhIjoiY2wwb3BvY3lnMXNtODNicmsxZDE0bXNkciJ9.w4ckbVUK7J4cfexaegpcCQ';///

