import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{  NgxGraphModule} from '@swimlane/ngx-graph';
import { FormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGraphModule,
    FormsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,   
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
