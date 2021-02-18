//Pokemon model

export class Pokemon{

    constructor(
        public name: String ='pikachu',
        public hp: Number = 35,
        public attack: Number = 55,
        public defense: Number = 40, 
        public specialAttack: Number =50, 
        public specialDefense: Number =50, 
        public speed: Number = 90,
        public types: String[] = ['electric','normal'],
        public sprite:String ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' ) {}
}