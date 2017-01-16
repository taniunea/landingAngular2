import { Component } from '@angular/core';
import { JuryMember} from './jury_member';
import { MemberDataService } from './member-data.service';

@Component({
  selector: 'jury',
  templateUrl: 'app/components/jury/jury.html',
  styleUrls: ['app/components/jury/jury.css']
})
export class JuryComponent  { 
	juryMembers : JuryMember[];

	constructor(private memberDataService : MemberDataService) { }

	ngOnInit() {
		this.memberDataService.getJuryMembers()
		.subscribe(juryMembers => {

			this.juryMembers = juryMembers;
		});
	}
}