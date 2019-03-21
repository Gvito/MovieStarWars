import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { StarshipsComponent } from './starships/starships.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PlanetsDetailComponent } from './planets-detail/planets-detail.component';
import { StarshipsDetailComponent } from './starships-detail/starships-detail.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PlanetsComponent,
    StarshipsComponent,
    PeopleDetailComponent,
    PlanetsDetailComponent,
    StarshipsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
