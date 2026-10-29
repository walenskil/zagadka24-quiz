import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegulaminComponent } from './regulamin/regulamin.component';
import { KoniecComponent } from './koniec/koniec.component';
import { PanstwaMiastaComponent } from './extras/panstwa-miasta/panstwa-miasta.component';
import { TabuComponent } from './extras/tabu/tabu.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'panstwaMiasta', component: PanstwaMiastaComponent },
  { path: 'tabu', component: TabuComponent },
  { path: 'regulamin', component: RegulaminComponent },
  { path: 'koniec', component: KoniecComponent },
  { path: 'quiz', component: QuizComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
