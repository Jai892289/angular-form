import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'w-ng5';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { environment } from './home/environments/environment';
import {NgxCaptchaModule} from  '@binssoft/ngx-captcha';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    PipesModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    ToastrModule.forRoot()
    
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
