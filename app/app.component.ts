import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core'

import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {IdGenerationService} from './services/id-generation.service';
import {GenericIdGenerationComponent} from './components/generic-id-generation/generic-id-generation.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app-component.html',
	  directives: [ROUTER_DIRECTIVES],
	  providers: [IdGenerationService]
})

@RouteConfig([
  {path:'/', name: 'IdGeneration', component: GenericIdGenerationComponent, useAsDefault: true}
])

export class AppComponent implements OnInit { 
  
  public title = 'Tour of Herous';
	
	constructor(private _idGenerationService: IdGenerationService) { 
		 
	}

	ngOnInit() {
		//this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}


	//Functions
	//onSelect(hero: Hero) { 
		//this.selectedHero = hero; 
	//}

}




