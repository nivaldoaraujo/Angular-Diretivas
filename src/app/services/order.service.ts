import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private listar: Array<string> = [
    "Caderno",
    "Apontador",
    "Caneta"
    
  ]

  constructor() { }

  public listarProd() {
    return this.listar
  }
    public listAdd(value: string){
      return this.listar.push(value) 
    }
}
