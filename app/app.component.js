System.register(['angular2/core', 'angular2/router', './services/id-generation.service', './components/generic-id-generation/generic-id-generation.component'], function(exports_1, context_1) {
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
    var core_1, router_1, id_generation_service_1, generic_id_generation_component_1;
    var AppComponent;
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
            },
            function (generic_id_generation_component_1_1) {
                generic_id_generation_component_1 = generic_id_generation_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_idGenerationService) {
                    this._idGenerationService = _idGenerationService;
                    this.title = 'Tour of Herous';
                }
                AppComponent.prototype.ngOnInit = function () {
                    //this._heroService.getHeroes().then(heroes => this.heroes = heroes);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app-component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [id_generation_service_1.IdGenerationService]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'IdGeneration', component: generic_id_generation_component_1.GenericIdGenerationComponent, useAsDefault: true }
                    ]), 
                    __metadata('design:paramtypes', [id_generation_service_1.IdGenerationService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map