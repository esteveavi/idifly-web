System.register(['angular2/core', 'angular2/router', '../../services/id-generation.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, id_generation_service_1;
    var GenericIdGenerationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (id_generation_service_1_1) {
                id_generation_service_1 = id_generation_service_1_1;
            }],
        execute: function() {
            GenericIdGenerationComponent = (function () {
                function GenericIdGenerationComponent(_idGenerationService, _router, routeParams) {
                    this._idGenerationService = _idGenerationService;
                    this._router = _router;
                    this.title = 'Page title';
                    this.idCodeList = null;
                    /* Form */
                    this.inputNumber = null;
                    this.inputLength = null;
                }
                GenericIdGenerationComponent.prototype.ngOnInit = function () {
                    //this._heroService.getHeroes().then(heroes => this.heroes = heroes);
                };
                //Functions
                GenericIdGenerationComponent.prototype.generateIdCodes = function () {
                    this.idCodeList = this._idGenerationService.generateRandomCodes(this.inputNumber, this.inputLength);
                };
                GenericIdGenerationComponent = __decorate([
                    core_1.Component({
                        selector: 'generic-id-generation',
                        templateUrl: 'app/components/generic-id-generation/generic-id-generation.html',
                        //directives: [],
                        providers: [id_generation_service_1.IdGenerationService]
                    }), 
                    __metadata('design:paramtypes', [id_generation_service_1.IdGenerationService, router_1.Router, router_1.RouteParams])
                ], GenericIdGenerationComponent);
                return GenericIdGenerationComponent;
            }());
            exports_1("GenericIdGenerationComponent", GenericIdGenerationComponent);
        }
    }
});
//# sourceMappingURL=generic-id-generation.component.js.map