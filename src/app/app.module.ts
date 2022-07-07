import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycontentComponent } from './mycontent/mycontent.component';
import { MypanelComponent } from './mypanel/mypanel.component';
import { MyheaderComponent } from './myheader/myheader.component';
import {  HttpClientModule} from '@angular/common/http'
import { Service } from './shared/phonebook.service';
import { TableViewComponent } from './mycontent/table-view/table-view.component';
import { AuthComponent } from './auth/auth.component';
import { PopupEditUserComponent } from './popup-edit-user/popup-edit-user.component';
import { ChartViewComponent } from './mycontent/chart-view/chart-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule
({
  declarations:
  [
    AppComponent,
    MycontentComponent,
    MypanelComponent,
    MyheaderComponent,
    TableViewComponent,
    AuthComponent,
    PopupEditUserComponent,
    ChartViewComponent
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})

export class AppModule { }
