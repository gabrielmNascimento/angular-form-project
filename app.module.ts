import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { navBar } from './events/navBar.component';
import { formDB } from './events/formDB.component';
import { PageNotFoundComponent } from './notFound.component';
import { footballComponent } from './events/formFootball.component';
import { RaceService } from './servicesDragonBall/race.service';
import { SkillService } from './servicesDragonBall/skill1.service';
import { SkillService2 } from './servicesDragonBall/skill2.service'
import { AttackService } from './servicesDragonBall/attack.service';
import { AttackService2 } from './servicesDragonBall/attack2.service';
import { AttackService3 } from './servicesDragonBall/attack3.service';
import { ItemService } from './servicesDragonBall/item.service';
import { RivalService } from './servicesDragonBall/rival.service';
import { PositionService } from './servicesFootball/position.service';
import { LeagueService } from './servicesFootball/league.service';

@NgModule({
  declarations: [
    AppComponent,
    navBar,
    formDB,
    PageNotFoundComponent,
    footballComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [RaceService, SkillService, SkillService2, AttackService, AttackService2, AttackService3, 
              ItemService, RivalService, PositionService, LeagueService],
              
  bootstrap: [AppComponent, navBar, formDB, PageNotFoundComponent, footballComponent]
})
export class AppModule { }
