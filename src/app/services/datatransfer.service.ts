import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {
  @Output() productsMostrar: EventEmitter<any> = new EventEmitter();
  @Output() productsMostrarCarro: EventEmitter<any> = new EventEmitter();

  constructor() { }

}
