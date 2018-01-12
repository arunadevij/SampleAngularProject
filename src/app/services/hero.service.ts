import { Injectable } from '@angular/core';
import { HEROES } from '../models/mock-heroes';
import { Hero } from '../models/hero';
import { MessageService } from './message.service';


import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched hero');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched heroes id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }


}