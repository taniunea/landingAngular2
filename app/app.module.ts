import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './components/header/header';
import { NavComponent }  from './components/navbar/nav';
import { AboutComponent }  from './components/about/about';
import { JuryComponent }  from './components/jury/jury';
import { MemberDataService } from './components/jury/member-data.service';
import { HttpModule} from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, HeaderComponent, NavComponent, AboutComponent, JuryComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ MemberDataService ]
})

export class AppModule { }