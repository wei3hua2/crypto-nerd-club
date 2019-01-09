import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoinsComponent} from './coins/coins.component';
import {CoinComponent} from './coin/coin.component';
import {RepoComponent} from './repo/repo.component';
import {PeopleComponent} from './people/people.component';

const routes: Routes = [
  { path: '', component: CoinsComponent },
  { path: 'coin/:id', component: CoinComponent },
  { path: 'repo/:owner/:id', component: RepoComponent },
  { path: 'people/:id', component: PeopleComponent }
  // { path: '', redirectTo: '/coins', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
