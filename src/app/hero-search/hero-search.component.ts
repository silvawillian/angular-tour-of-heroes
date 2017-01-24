import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { HeroSearchService } from '../hero-search.service';
import { Hero } from '../hero';

@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) { }

  // Inclui um termo de busca no Observable
  search(term: string): void {
    this.searchTerms.next(term);

  }

  ngOnInit(): void {
    this.heroes = this.searchTerms
      .debounceTime(300)                      // Aguarda 300ms 
      .distinctUntilChanged()                 // Ignora se o próximo termo é igual ao passado
      .switchMap(term => term                 // Troca pro novo Observable
        ? this.heroSearchService.search(term) // Retorna a busca (search)
        : Observable.of<Hero[]>([]))          // Ou vazio, caso não encontre nada
      .catch(error => {
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);

  } 
}
