import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Services
import { APIService } from './services/api.service';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { GitSearchModule } from './git-search/git-search.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    NgbPaginationModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    GitSearchModule,
    BrowserAnimationsModule
  ],
  providers: [
    APIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
