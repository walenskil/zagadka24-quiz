import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegulaminComponent } from './regulamin/regulamin.component';
import { PolibiuszComponent } from './quiz/polibiusz/polibiusz.component';
import { KlotskiComponent } from './quiz/klotski/klotski.component';
import { AudioComponent } from './quiz/audio/audio.component';
import { PanoramaComponent } from './quiz/panorama/panorama.component';
import { NgxView360Module } from '@egjs/ngx-view360';
import { KoniecComponent } from './koniec/koniec.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent,
    RegulaminComponent,
    PolibiuszComponent,
    KlotskiComponent,
    AudioComponent,
    PanoramaComponent,
    KoniecComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxView360Module 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
