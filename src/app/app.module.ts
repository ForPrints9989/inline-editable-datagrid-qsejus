import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { MasterDetailComponent } from './master-detail/master-detail.component';
import { GridComponent } from './master-detail/grid/grid.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    BrowserModule, BrowserAnimationsModule, 
    ClarityModule, FormsModule, 
    AppRoutingModule,
    NgSelectModule
  ],
  declarations: [
    AppComponent,
    MasterDetailComponent,
    GridComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
