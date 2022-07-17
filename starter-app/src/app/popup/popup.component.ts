import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  age:number = 0;
  MAX_AGE:number = 110;

  constructor() {
    this.age = 10;
  }

  ngOnInit(): void {
    alert("Componente: carga inicial");
  }


  increaseAge(){
    if(this.age > this.MAX_AGE){
      alert('Ya no spoporta edades mayores a este valor');
      return;      
    }
    
    this.age++;
  }

  decreaseAge(){
    if(this.age < 1)
    {
      alert('Ya no ps, seria recien nacido sin edad xD');
      return;
    }

    this.age--;
  }

}
