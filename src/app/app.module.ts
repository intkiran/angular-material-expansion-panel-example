import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MaterialModule } from './material.module';
import { BasicExpansionPanelComponent } from './basic-expansion-panel/basic-expansion-panel.component';


@NgModule({
  imports:      [ AppRoutingModule,BrowserModule,BrowserAnimationsModule, MaterialModule],
  declarations: [ AppComponent,BasicExpansionPanelComponent],
  bootstrap:    [ AppComponent ],
  providers:[],
  exports:[BasicExpansionPanelComponent]
})
export class AppModule { }
