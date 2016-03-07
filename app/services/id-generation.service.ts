import {Injectable} from 'angular2/core';
import {IdCode} from '../model/idCode';
import {CodeTypeEnum} from '../model/codeTypeEnum';
declare var S:any; 

@Injectable()

export class IdGenerationService {
	
	generateRandomCodes(numberOfCodes: number, codeLength: number) {
		var idCodeList: IdCode[] = [];
		var code: any = null;

		for (var i = 0; i < numberOfCodes; i++) {
			console.log(i);

			code = this.getRandomIntInclusive(0, Math.pow(10, codeLength));
			code = S(code).padLeft(codeLength, '0').s;
			
			idCodeList.push({ "applicationId": 11, "code": code, "type": CodeTypeEnum.SIMPLE, 
				"creationDatetime": new Date() });
		}

		return idCodeList;
	}

	// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
	getRandomIntInclusive(min:number, max:number) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

}