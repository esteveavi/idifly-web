System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var IdGenerationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            IdGenerationService = (function () {
                function IdGenerationService() {
                }
                IdGenerationService.prototype.generateRandomCodes = function (numberOfCodes, codeLength) {
                    var idCodeList = [];
                    var code = null;
                    for (var i = 0; i < numberOfCodes; i++) {
                        console.log(i);
                        code = this.getRandomIntInclusive(0, Math.pow(10, codeLength));
                        code = S(code).padLeft(codeLength, '0').s;
                        idCodeList.push({ "applicationId": 11, "code": code, "type": 0 /* SIMPLE */,
                            "creationDatetime": new Date() });
                    }
                    return idCodeList;
                };
                // Returns a random integer between min (included) and max (included)
                // Using Math.round() will give you a non-uniform distribution!
                IdGenerationService.prototype.getRandomIntInclusive = function (min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                };
                IdGenerationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], IdGenerationService);
                return IdGenerationService;
            }());
            exports_1("IdGenerationService", IdGenerationService);
        }
    }
});
//# sourceMappingURL=id-generation.service.js.map