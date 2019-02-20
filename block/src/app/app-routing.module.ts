import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JogoComponent } from './jogo/jogo.component';
import { Lvl2Component } from './lvl2/lvl2.component';
import { FrontpageComponent } from './frontpage/frontpage.component';


const routes: Routes = [
  { path: 'level1', component: JogoComponent },
  { path: 'level2', component: Lvl2Component },
  { path: 'frontpage', component: FrontpageComponent },
  { path: '', redirectTo: '/frontpage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
