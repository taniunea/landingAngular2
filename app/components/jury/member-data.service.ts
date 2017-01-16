import { JuryMember } from './jury_member';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import'rxjs/add/operator/map';

@Injectable()
export class MemberDataService {
	constructor (private http: Http){}
	
	getJuryMembers() {
		return this.http.get('app/components/jury/jury_members.json')
		.map( response => response.json());
	}
}