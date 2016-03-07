import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core'

import {Router, RouteParams} from 'angular2/router';

import {IdGenerationService} from '../../services/id-generation.service';
import {IdCode} from '../../model/idCode';


@Component({
    selector: 'generic-id-generation',
    templateUrl: 'app/components/generic-id-generation/generic-id-generation.html',
	//directives: [],
	providers: [IdGenerationService]
})

export class GenericIdGenerationComponent implements OnInit { 
  
  	public title = 'Page title';
	public idCodeList: IdCode[] = null;

	/* Form */
	public inputNumber:number = null;
	public inputLength:number = null;
	
	constructor(
		private _idGenerationService: IdGenerationService,
		private _router: Router,
		routeParams: RouteParams
		) { 
		 
	}

	ngOnInit() {
		//this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}


	//Functions
	generateIdCodes(){
		this.idCodeList = this._idGenerationService.generateRandomCodes(this.inputNumber, this.inputLength);
	}
	

}
