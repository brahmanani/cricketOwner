import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OwnerComponent } from './owner/owner.component';
import { RosterComponent } from './roster/roster.component';


@NgModule({
  declarations: [
    AppComponent,
    OwnerComponent,
    RosterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
