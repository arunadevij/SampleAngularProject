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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  public rename() {
    this.userA.name = 'Name';
    this.rEmitter.emit(this.userA)
  }

}
