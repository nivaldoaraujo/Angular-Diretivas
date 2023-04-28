import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})

export class DiretivasComponent implements OnInit {
  public condicao: boolean = true
  public condicaoClick: boolean = true
  public hoje: string = "Hoje é: 27-04-2023";
  public nome1: string =""

  public list: Array<{ nome: string, idade: number}> = [
    { nome: "Mario da Costa", idade: 28 },
    { nome: "Marcelo Lima", idade: 45  },
    { nome: "Nivaldo o cara", idade: 18  },
    { nome: "Maria de Lima", idade: 39  }
  ]
  public list2: Array<{ nome: string}> = []

  public date:Date = new Date()

  constructor(){}

  ngOnInit(): void{
    setInterval(() => {
      if(this.condicao){
        this.condicao = false
      }
      else
      {
      this.condicao = true
    }
    }, 2000)
  }
  public onClick(){
      if(this.condicaoClick){
        this.condicaoClick = false
      }
      else
      {
      this.condicaoClick = true
  }
  }
  public onClickAdd(){
    this.list.push({nome: "Marcio Lira", idade: 54})
  }
  public onClickRemoveList(event: number)
  {
      this.list.splice(event, 1)
  }
  public salvar(){
    this.list2.push({nome: this.nome1})
    this.nome1 = ""
  }
}
