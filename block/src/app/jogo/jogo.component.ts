import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.scss']
})
/* 
 dir (direção)
 1 = norte
 2 = leste
 3 = sul
 4 = oeste
 */
export class JogoComponent implements OnInit {
  i = 0; //i é pro nº de itens na lista
  j = 0; //j é pra ler qual comando
  loops = [];
  btns = [];
  avancar = 1; //os numeros aqui definem qual comando a função 'rodarPrograma' vai fazer.
  virDireita = 3;
  virEsquerda = 2;
  dir = 2; //dureção em que o personagem está olhando
  x = 0;   //coordenada X
  y = 0;   //coordenada Y
  itemCount: number = 0;

  constructor() { }

  ngOnInit() {
    //this.itemCount = this.loops.length;
  }
  addAdv() {
    this.loops.push('Avançar');
    this.itemCount = this.loops.length;
    this.btns.push(this.avancar);
  }
  addEsquerda() {
    this.loops.push('Virar para esquerda');
    this.itemCount = this.loops.length;
    this.btns.push(this.virEsquerda);
  }
  addDireita() {
    this.loops.push('Virar para direita');
    this.itemCount = this.loops.length;
    this.btns.push(this.virDireita);
  }
  clear(){
    this.x = 0;
    this.y = 0;
    this.dir = 2;
    this.btns.length = 0;
    this.loops.length = 0;
  }
  checkPosition(){
    if(this.x == 3 && this.y == 0){
      console.log("Chegou no objetivo");
      window.alert("Chegou no objetivo");
    }
    else{
      console.log("Errou objetivo");
      window.alert("Errou objetivo");
    }
  }
  rodarPrograma(){
    console.log("rodando");
    for(this.i=0; this.i < this.btns.length; this.i++){
      console.log("rodando4");
      this.j=this.btns[this.i];
      console.log("rodando2");
      switch(this.j){
        case 1:
          console.log("rodando");
          switch(this.dir){
            case 1:
              this.y++;
              console.log("x = " + this.x);
              console.log("y = " + this.y);
              console.log("dir = " + this.dir);
            break;
            case 2:
              this.x++;
              console.log("x = " + this.x);
              console.log("y = " + this.y);
             console.log("dir = " + this.dir);
            break;
            case 3:
              this.y--;
              console.log("x = " + this.x);
              console.log("y = " + this.y);
             console.log("dir = " + this.dir);
            break;
            case 4:
              this.x--;
              console.log("x = " + this.x);
              console.log("y = " + this.y);
             console.log("dir = " + this.dir);
            break;
            default:
            break;
          }
        break;
        case 2:
          switch(this.dir){
            case 1:
              this.dir = 4;
            break;
            case 2:
              this.dir = 1;
            break;
            case 3:
              this.dir = 2;
            break;
            case 4:
              this.dir = 3;
            break;
          }
          console.log("dir = " + this.dir);
        break;
        case 3:
        switch(this.dir){
            case 1:
              this.dir = 2;
            break;
            case 2:
              this.dir = 3;
            break;
            case 3:
              this.dir = 4;
            break;
            case 4:
              this.dir = 1;
            break;
          }
          console.log("dir = " + this.dir);
        break;
        default:
        break;
      }
    }
    console.log("x = " + this.x);
    console.log("y = " + this.y);
    console.log("dir = " + this.dir);
    this.checkPosition();
  }
}
