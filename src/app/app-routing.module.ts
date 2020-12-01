import { SolvequizComponent } from './solvequiz/solvequiz.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent},
   { path: 'register', component: RegisterComponent },
   {path: 'welcome/:name' , component: WelcomeComponent, canActivate:[RouteGuardService]},
   {path: 'createquiz' , component: CreateQuizComponent, canActivate:[RouteGuardService]},
   {path: 'solvequiz' , component: SolvequizComponent, canActivate:[RouteGuardService]},
   {path: 'logout' , component: LogoutComponent},
   { path: '**', component: ErrorComponent, canActivate:[RouteGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
