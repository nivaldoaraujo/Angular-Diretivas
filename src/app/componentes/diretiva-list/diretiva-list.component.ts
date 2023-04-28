import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
OrderService

@Component({
  selector: 'app-diretiva-list',
  templateUrl: './diretiva-list.component.html',
  styleUrls: ['./diretiva-list.component.css']
})
export class DiretivaListComponent {
  public listar: Array<string> = []
  constructor(private orderService: OrderService){}

  ngOnInit(): void{
    this.listar = this.orderService.listarProd()
  }
  public listAddItem(value: string){
    return this.orderService.listAdd(value)
  }

}
