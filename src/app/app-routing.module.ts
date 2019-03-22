import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { StarshipsComponent } from './starships/starships.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PlanetsDetailComponent } from './planets-detail/planets-detail.component';
import { StarshipsDetailComponent } from './starships-detail/starships-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  { path: 'people', component: PeopleComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: 'peopleDetail/:id', component: PeopleDetailComponent },
  { path: 'planetsDetail/:id', component: PlanetsDetailComponent },
  { path: 'starshipsDetail/:id', component: StarshipsDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
