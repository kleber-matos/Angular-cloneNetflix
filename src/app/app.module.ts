import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardLeftComponent } from './components/small-card-left/small-card-left.component';
import { SmallCardRigthComponent } from './components/small-card-rigth/small-card-rigth.component';
import { CardPerguntasComponent } from './components/card-perguntas/card-perguntas.component';
import { CardRodapeComponent } from './components/card-rodape/card-rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    BigCardComponent,
    SmallCardLeftComponent,
    SmallCardRigthComponent,
    CardPerguntasComponent,
    CardRodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
