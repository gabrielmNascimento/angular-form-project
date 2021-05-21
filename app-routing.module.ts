import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { formDB } from './events/formDB.component';
import { footballComponent } from './events/formFootball.component';
import { PageNotFoundComponent } from './notFound.component';

const routes: Routes = [
  { path: '', redirectTo:'/dragonball', pathMatch:'full'},
  { path: 'dragonball', component:formDB },
  { path: 'football', component:footballComponent},
  { path: "**", component:PageNotFoundComponent}
  /*
  { path: 'hero', component:heroComponent},
  { path: 'ninja', component:ninjaComponent},
  { path: 'basketball', component: basketballComponent}
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  formDB
]
