import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

  @Input() pokemon : Pokemon = new Pokemon() 
  @Output() closedCard = new EventEmitter<Pokemon>();
  bgColor: string
  showDetails: boolean

  constructor() { 
    this.bgColor = '#91deeb'
    this.showDetails = false
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  printEvent(event: any){
    console.log(event);
  }

  toggleBg(){
    this.bgColor === '#91deeb'? this.bgColor = '#3ed0ea' : this.bgColor = '#91deeb'
  }

  toggleDetails(){
    this.showDetails = !this.showDetails
  }

  closeCard(){
    this.closedCard.emit() //Emit can receive a parameter and it will be included in the $event for it to be used by the parent component
  }

}
