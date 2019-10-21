import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsService } from './news.service';
import { LivenewsComponent } from './livenews/livenews.component';
import { CrudoperationComponent } from './crudoperation/crudoperation.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RegformComponent } from './regform/regform.component';
import { SrvceService } from './srvce.service';


@NgModule({
  declarations: [
    AppComponent,
    LivenewsComponent,
    CrudoperationComponent,
    LoginformComponent,
    RegformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NewsService,SrvceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
