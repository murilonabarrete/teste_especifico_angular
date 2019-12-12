import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemon';
  especiesGen1;
  especiesGen2;
  especiesUrl = 'https://pokeapi.co/api/v2/generation/';
  listaPokemonsG1 = [];
  listaPokemonsG2 = [];
  pokemonsG1 = [];
  pokemonsG2 = [];
  pokemons = [];
  pokemonSprites;
  nomeEn = 'Nome em inglês';
  nomeJp = 'nome em japonês';
  genusEn = 'Genus';
  id = '000';
  flavorTextEn = [];
  img = '';
  imgUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(
    private _http: HttpClient
  ) {
    this._http.get(this.especiesUrl + 1).subscribe(res => {
      this.especiesGen1 = res;

      for (let i = 0; i < 7; i++) {
        this.listaPokemonsG1.push(this.especiesGen1.pokemon_species[i]);
      }

      this.getPokemons(this.listaPokemonsG1, 1);

    }, err => console.log(err));

    this._http.get(this.especiesUrl + 2).subscribe(res => {
      this.especiesGen2 = res;

      for (let i = 0; i < 7; i++) {
        this.listaPokemonsG2.push(this.especiesGen2.pokemon_species[i]);
      }

      this.getPokemons(this.listaPokemonsG2, 2);

    }, err => console.log(err));
  }

  getPokemons(listaPokemons, geracao) {
    listaPokemons.forEach(pokemon => {
      this._http.get(pokemon.url).subscribe(res => {
        if (geracao === 1)
          this.pokemonsG1.push(res);
        else
          this.pokemonsG2.push(res);

        // console.log(this.pokemonsG1);
        this.buttonGen1Click();
        this.buttonPoke1Click();

      }, err => console.log(err));
    })
  }

  getSprites(pokemon) {
    this._http.get(this.imgUrl + pokemon.id).subscribe(res => {
      this.pokemonSprites = res;
      this.img = this.pokemonSprites.sprites.front_default;
    }, err => console.log(err));
  }

  mudaPokemon(pos) {
    this.id = this.pokemons[pos].id;
    this.nomeEn = this.pokemons[pos].name;
    this.pokemons[pos].names.forEach(name => {
      if (name.language.name === 'ja')
        this.nomeJp = name.name;
    });
    this.flavorTextEn = [];
    this.pokemons[pos].flavor_text_entries.forEach(text => {
      if (text.language.name === 'en') {
        this.flavorTextEn.push(text.flavor_text + "\n");
      }
    });
    this.getSprites(this.pokemons[pos]);
    this.pokemons[pos].genera.forEach(genero => {
      if (genero.language.name === 'en') {
        this.genusEn = genero.genus;
      }
    })
  }

  buttonGen1Click() {
    document.getElementById("button-gen1").style.zIndex = '3';
    document.getElementById("button-gen1").style.background = '#EEEEEE';
    document.getElementById("button-gen2").style.zIndex = '0';
    document.getElementById("button-gen2").style.background = '#FAFAFA';
    document.getElementById("text-gen1").style.color = '#611829';
    document.getElementById("text-gen2").style.color = '#AAAAAA';
    this.pokemons = this.pokemonsG1;
    this.buttonPoke1Click();
  }

  buttonGen2Click() {
    document.getElementById("button-gen1").style.zIndex = '0';
    document.getElementById("button-gen1").style.background = '#FAFAFA';
    document.getElementById("button-gen2").style.zIndex = '3';
    document.getElementById("button-gen2").style.background = '#EEEEEE';
    document.getElementById("text-gen1").style.color = '#AAAAAA';
    document.getElementById("text-gen2").style.color = '#611829';
    this.pokemons = this.pokemonsG2;
    this.buttonPoke1Click();
  }

  buttonPoke1Click() {
    this.buttonPokeToNormal();
    document.getElementById("button-poke1").style.background = 'transparent linear-gradient(180deg, #EEEEEE 0%, #FAFAFA 100%) 0% 0% no-repeat padding-box';
    document.getElementById("button-poke1").style.borderRight = '1.5px solid #EEEEEE';

    this.mudaPokemon(0);
  }

  buttonPoke2Click() {
    this.buttonPokeToNormal();
    document.getElementById("button-poke2").style.background = 'transparent linear-gradient(180deg, #EEEEEE 0%, #FAFAFA 100%) 0% 0% no-repeat padding-box';
    document.getElementById("button-poke2").style.borderRight = '1.5px solid #EEEEEE';

    this.mudaPokemon(1);
  }

  buttonPoke3Click() {
    this.buttonPokeToNormal();
    document.getElementById("button-poke3").style.background = 'transparent linear-gradient(180deg, #EEEEEE 0%, #FAFAFA 100%) 0% 0% no-repeat padding-box';
    document.getElementById("button-poke3").style.borderRight = '1.5px solid #EEEEEE';

    this.mudaPokemon(2);
  }

  buttonPoke4Click() {
    this.buttonPokeToNormal();
    document.getElementById("button-poke4").style.background = 'transparent linear-gradient(180deg, #EEEEEE 0%, #FAFAFA 100%) 0% 0% no-repeat padding-box';
    document.getElementById("button-poke4").style.borderRight = '1.5px solid #EEEEEE';

    this.mudaPokemon(3);
  }

  buttonPoke5Click() {
    this.buttonPokeToNormal();
    document.getElementById("button-poke5").style.background = 'transparent linear-gradient(180deg, #EEEEEE 0%, #FAFAFA 100%) 0% 0% no-repeat padding-box';
    document.getElementById("button-poke5").style.borderRight = '1.5px solid #EEEEEE';

    this.mudaPokemon(4);
  }

  buttonPoke6Click() {
    this.buttonPokeToNormal();
    document.getElementById("button-poke6").style.background = 'transparent linear-gradient(180deg, #EEEEEE 0%, #FAFAFA 100%) 0% 0% no-repeat padding-box';
    document.getElementById("button-poke6").style.borderRight = '1.5px solid #EEEEEE';

    this.mudaPokemon(5);
  }

  buttonPoke7Click() {
    this.buttonPokeToNormal();
    document.getElementById("button-poke7").style.background = 'transparent linear-gradient(180deg, #EEEEEE 0%, #FAFAFA 100%) 0% 0% no-repeat padding-box';
    document.getElementById("button-poke7").style.borderRight = '1.5px solid #EEEEEE';

    this.mudaPokemon(6);
  }

  buttonPokeToNormal() {
    document.getElementById("button-poke1").style.background = '#EEEEEE 0% 0% no-repeat padding-box';
    document.getElementById("button-poke1").style.borderRight = '1.5px solid #CCCCCC';
    document.getElementById("button-poke2").style.background = '#EEEEEE 0% 0% no-repeat padding-box';
    document.getElementById("button-poke2").style.borderRight = '1.5px solid #CCCCCC';
    document.getElementById("button-poke3").style.background = '#EEEEEE 0% 0% no-repeat padding-box';
    document.getElementById("button-poke3").style.borderRight = '1.5px solid #CCCCCC';
    document.getElementById("button-poke4").style.background = '#EEEEEE 0% 0% no-repeat padding-box';
    document.getElementById("button-poke4").style.borderRight = '1.5px solid #CCCCCC';
    document.getElementById("button-poke5").style.background = '#EEEEEE 0% 0% no-repeat padding-box';
    document.getElementById("button-poke5").style.borderRight = '1.5px solid #CCCCCC';
    document.getElementById("button-poke6").style.background = '#EEEEEE 0% 0% no-repeat padding-box';
    document.getElementById("button-poke6").style.borderRight = '1.5px solid #CCCCCC';
    document.getElementById("button-poke7").style.background = '#EEEEEE 0% 0% no-repeat padding-box';
    document.getElementById("button-poke7").style.borderRight = '1.5px solid #CCCCCC';
  }

  tipoA() {
  }

  tipoB() {
  }

}
