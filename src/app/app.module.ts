import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { SolvequizComponent } from './solvequiz/solvequiz.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor-BasicAuth.service';
import { ViewquizzesComponent } from './viewquizzes/viewquizzes.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SolvedquizzesComponent } from './solvedquizzes/solvedquizzes.component';
import { MyquizzesComponent } from './myquizzes/myquizzes.component';
import { CreatequizSetComponent } from './createquiz-set/createquiz-set.component';
import { SolveQuizSetComponent } from './solve-quiz-set/solve-quiz-set.component';
import { ViewQuizSetsComponent } from './view-quiz-sets/view-quiz-sets.component';
import { SolveQuizInQuizSetComponent } from './solve-quiz-in-quiz-set/solve-quiz-in-quiz-set.component';

// const routes: Routes = [
//   { path: 'login-component', component: LoginComponent },
//   { path: 'register-component', component: RegisterComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    WelcomeComponent,
    CreateQuizComponent,
    SolvequizComponent,
    LogoutComponent,
    ViewquizzesComponent,
    FooterComponent,
    SolvedquizzesComponent,
    MyquizzesComponent,
    CreatequizSetComponent,
    SidebarComponent,
    SolveQuizSetComponent,
    ViewQuizSetsComponent,
    SolveQuizInQuizSetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],

  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:  HttpInterceptorService , multi : true},
    SolveQuizInQuizSetComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
