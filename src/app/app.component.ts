import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  count = 0;
  
  nome = "Alexandre Siqueira Pereira"

  text: string = '';

  pessoas = [
    {
      nome: "Alexandre",
      sobrenome: "Siqueira"

    },
    {
      nome: "Emily",
      sobrenome: "Mariano"
    },
    {
      nome: "Poliana",
      sobrenome: "Pereira"
    },
    {
      nome: "Jesuino",
      sobrenome: "Pereira"
    }
  ]

  constructor(){

  }  

  ngOnInit(): void {
    let interval = setInterval(()=>{
      this.count++;
      if(this.count === 10){
        clearInterval(interval);
      }
    }, 1000)
  }

  public clicou(nome: string): void{
    console.log('Clicou em mim', nome);
  }

}