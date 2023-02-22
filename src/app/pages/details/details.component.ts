// Angular
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// Aplicação
import { PokeApiService } from 'src/app/service/poke-api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {

  private urlPokemon: string = "https://pokeapi.co/api/v2/pokemon";
  private urlName: string = "https://pokeapi.co/api/v2/pokemon-species";

  public pokemon: any;
  public apiError: boolean = false;
  public isLoading: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  public  getPokemon() {
    const id = this.activatedRoute.snapshot.params['id'];
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);

    return forkJoin([pokemon, name]).subscribe({
      next: (res) => {
        this.pokemon = res;
        this.isLoading = true;
      },
      error: (err) => {
        this.apiError = true;
      }
    });
  }
}
