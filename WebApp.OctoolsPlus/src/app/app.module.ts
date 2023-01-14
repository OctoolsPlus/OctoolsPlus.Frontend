import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';  
import { ApiService } from './service/api.service';
import { YoutubeDonwnloadComponent } from './youtube-donwnload/youtube-donwnload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeDonwnloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
    
  ],
  providers: [HttpClientModule, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
