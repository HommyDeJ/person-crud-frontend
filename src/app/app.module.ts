import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './components/pokemon/pokemon-details/pokemon-details.component';
import { SearchPipe } from './shared/pipes/search.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchPipe,
    AppComponent,
    PokemonListComponent,
    PokemonDetailsComponent, 
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }