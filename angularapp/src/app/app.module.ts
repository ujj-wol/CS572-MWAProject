import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { UsersService } from './services/user/users.service';
import { ErrorComponent } from './error.component';
import { HeaderComponent } from './public/header.component';
import { FooterComponent } from './public/footer.component';
import { PostsComponent } from './components/post/posts.component';
import { AttachTokenInterceptor} from './attach-token';
import { SignupComponent } from './components/login/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    PostsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
     { path: '', loadChildren: './modules/login.module#LoginModule' },
     { path: 'user', loadChildren: './modules/users.module#UsersModule'},
     { path: 'login', loadChildren: './modules/login.module#LoginModule'},
     { path: 'error', component: ErrorComponent },
     { path: 'home', component: HomeComponent },
     { path: 'signup', component: SignupComponent },
     { path: 'post', loadChildren: './modules/posts.module#PostsModule' }

    ])
  ],
  providers: [
    UsersService,
    { provide: HTTP_INTERCEPTORS, useClass: AttachTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
