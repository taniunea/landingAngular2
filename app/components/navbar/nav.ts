import { Component } from '@angular/core';
import { MenuItem } from './nav_menu-item';

@Component({
  selector: 'navigation',
  templateUrl: 'app/components/navbar/nav.html',
  styleUrls: ['app/components/navbar/nav.css']
})
export class NavComponent  {
	menuItems = [
  		new MenuItem("About", "#about"),
  		new MenuItem("Jury", "#jury"),
  		new MenuItem("Submissions", "#submissions"),
  		new MenuItem("News", "#news"),
  		new MenuItem("Partners", "#partners")
	];
 }