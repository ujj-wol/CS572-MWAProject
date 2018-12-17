import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { UsersService } from './services/user/users.service';
import { ErrorComponent } from './error.component';
import { HeaderComponent } from './public/header.component';
import { FooterComponent } from './public/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
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
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
