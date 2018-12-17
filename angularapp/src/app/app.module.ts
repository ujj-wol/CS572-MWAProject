import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { UsersService } from './services/user/users.service';
import { ErrorComponent } from './error.component';
import { HeaderComponent } from './public/header.component';
import { FooterComponent } from './public/footer.component';
import { PostsComponent } from './components/post/posts.component';
import { AttachTokenInterceptor} from './attach-token';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
     { path: '', loadChildren: './modules/login.module#LoginModule' },
     { path: 'users', loadChildren: './modules/users.module#UsersModule'},
     { path: 'login', loadChildren: './modules/login.module#LoginModule'},
     { path: 'error', component: ErrorComponent },
     { path: 'home', component: HomeComponent },
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
