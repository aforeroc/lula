import { Component, OnInit } from '@angular/core';
import { Bono } from '../models/bono.model';

@Component({
  selector: 'app-bono',
  templateUrl: './bono.component.html',
  styleUrls: ['./bono.component.css']
})
export class BonoComponent implements OnInit {

  bono: Bono = new Bono();

  constructor() { }

  ngOnInit(): void {
  }

}
