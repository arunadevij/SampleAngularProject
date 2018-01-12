import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  @Input() userA;
  @Output() rEmitter: EventEmitter<any> = new EventEmitter();

  selectedHero: Hero;

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes = [];
    console.log(this.userA, 11111)

    this._initHeros();
  }

  private _initHeros() {
    this.heroService.getHeroes()
      .subscribe((heroData: Hero[]) => {
        heroData.map(h => this.heroes.push(new Hero(h)))
      })
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


  public rename() {
    this.userA.name = 'Name';
    this.rEmitter.emit(this.userA)
  }

}
