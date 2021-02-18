import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokeCardComponent } from './poke-card/poke-card.component';
import { PokeCardsComponent } from './poke-cards/poke-cards.component';
import { HeaderComponent } from './header/header.component';
import { PokeTeamComponent } from './poke-team/poke-team.component';
import { PokeMemberComponent } from './poke-member/poke-member.component';
import { PokeLabComponent } from './poke-lab/poke-lab.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeCardComponent,
    PokeCardsComponent,
    HeaderComponent,
    PokeTeamComponent,
    PokeMemberComponent,
    PokeLabComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
