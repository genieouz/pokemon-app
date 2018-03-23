import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from './pokemon' ;
import {POKEMONS} from './mock-pokemons';

@Component({
	selector: 'list-pokemon',
	templateUrl: "app/views/pokemon.html",
})
export class ListPokemonComponent implements OnInit{

	constructor(private router: Router){}
	private pokemons: Pokemon[]=null;
	ngOnInit(){
		this.pokemons=POKEMONS;
	}

	selectPokemon(pokemon: Pokemon): void{
		console.log(pokemon.name);
		let link=['/pokemon',pokemon.id];
		this.router.navigate(link);
	}

}