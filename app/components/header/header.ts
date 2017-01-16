import { Component } from '@angular/core';

@Component({
  selector: 'pageHeader',
  templateUrl: 'app/components/header/header.html',
  styleUrls: ['app/components/header/header.css']
})
export class HeaderComponent  { 
	title = "Malmö Design Competition ";
	titleSpan = "'17";
}

