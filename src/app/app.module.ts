import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
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
import { HttpInterceptorService } from './service/http-interceptor-BasicAuth.service';
import { ViewquizzesComponent } from './viewquizzes/viewquizzes.component';
import { FooterComponent } from './footer/footer.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
  ],

  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:  HttpInterceptorService , multi : true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
