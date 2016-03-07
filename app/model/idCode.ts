import {CodeTypeEnum} from './codeTypeEnum';


export interface IdCode {
	applicationId: number;
	code: string;
	type: CodeTypeEnum;
	creationDatetime: Date;
}

