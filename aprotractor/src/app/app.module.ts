import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpService } from './httpservice.service';
import { ListProfileComponent } from './list-profile/list-profile.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
