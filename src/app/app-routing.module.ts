import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './components/pokemon/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './components/pokemon/pokemon-details/pokemon-details.component';

const routes: Routes = [
  { path: '', component: PokemonListComponent, pathMatch: 'full' },
  { path: 'pokemon', component: PokemonListComponent },
  { path: 'detail/:id', component: PokemonDetailsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
