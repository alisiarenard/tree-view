import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeModule } from './tree/tree.module';
import { TreeDataService } from './tree/services/tree-data.sevice';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TreeModule
  ],
  providers: [TreeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
