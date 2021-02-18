import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokeModel } from '../dtos/pokemodel.model';

@Component({
  selector: 'app-poke-cards',
  templateUrl: './poke-cards.component.html',
  styleUrls: ['./poke-cards.component.css']
})
export class PokeCardsComponent implements OnInit {

  pokeList: Pokemon[] = []
  name: string

  constructor(private http: HttpClient) { 
    this.name = ''
  }

  ngOnInit(): void {
  }

  onKeyDown(event) {
    if (event.key === "Enter" && this.name != '') {
      this.addPokemon();
    }
  }

  addPokemon(){
    if (this.pokeList.length >= 7){
      alert('You can only have 7 pokemons in your team')
      return 
    }
    this.http.get<PokeModel>('https://pokeapi.co/api/v2/pokemon/'+this.name.toLocaleLowerCase()).subscribe(response =>{
      let name = response.name
      let types = []
      let hp = 0
      let attack = 0
      let defense = 0
      let specialAttack = 0
      let specialDefense = 0
      let speed = 0
      let sprite = ''

      for( let item of response.types){
        types.push(item.type.name)
      }
      for (let item of response.stats){
        switch (item.stat.name) {
          case 'hp':
            hp = item.base_stat
          break;
          case 'attack':
            attack = item.base_stat
          break;
          case 'defense':
            defense = item.base_stat
          break;
          case 'special-attack':
            specialAttack = item.base_stat
          break;
          case 'special-defense':
            specialDefense = item.base_stat
          break;
          case 'speed':
            speed = item.base_stat
          break;
        
          default:
            break;
        }
      }
      sprite = response.sprites.front_default
      console.log(sprite)
      let pokemon = new Pokemon(name,hp,attack,defense,specialAttack,specialDefense,speed,types,sprite)
      this.pokeList.push(pokemon)
    },
    error =>{
      alert('Pokemon name not recognized, please try again')
    })
    this.name = ''
  }

  // Receives an index and eliminates it from the pokeList
  onClosedCard(i: number){
    this.pokeList.splice(i,1)
  }

}
