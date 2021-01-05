import { SolveQuizSetComponent } from './solve-quiz-set/solve-quiz-set.component';
import { ViewQuizSetsComponent } from './view-quiz-sets/view-quiz-sets.component';
import { CreatequizSetComponent } from './createquiz-set/createquiz-set.component';
import { SolvedquizzesComponent } from './solvedquizzes/solvedquizzes.component';
import { ViewquizzesComponent } from './viewquizzes/viewquizzes.component';
import { SolvequizComponent } from './solvequiz/solvequiz.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './services/route-guard.service';
import { MyquizzesComponent } from './myquizzes/myquizzes.component';

const routes: Routes = [
   {path: '', component: LoginComponent },
   {path: 'login', component: LoginComponent},
   {path: 'register', component: RegisterComponent },
   {path: 'welcome/:name' , component: WelcomeComponent, canActivate: [RouteGuardService],
      children:[
                {path: 'solvedquizzes', component: SolvedquizzesComponent, canActivate: [RouteGuardService]},
                {path: 'quizzes' , component: ViewquizzesComponent, canActivate: [RouteGuardService]},
                {path: 'myquizzes' , component: MyquizzesComponent, canActivate: [RouteGuardService]},
                {path: 'createquizset' , component: CreatequizSetComponent, canActivate: [RouteGuardService]},
                {path: 'solve/:id' , component: SolvequizComponent, canActivate: [RouteGuardService]},
                {path: 'createquiz' , component: CreateQuizComponent, canActivate: [RouteGuardService]},
                {path: 'quizSets', component: ViewQuizSetsComponent,canActivate: [RouteGuardService]},
                {path: 'solveQuizSet/:id', component: SolveQuizSetComponent, canActivate: [RouteGuardService],
                  children:[{path: 'solve/175' , component: SolvequizComponent, canActivate: [RouteGuardService]}]
                }
              ]}
   ,
   {path: 'logout' , component: LogoutComponent},
   {path: '**', component: ErrorComponent, canActivate: [RouteGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
