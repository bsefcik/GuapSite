import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {App} from './app';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../routes/routes';
import {GsHomePage} from '../components/homepage/homepage';


@NgModule({
  declarations: [
    App,
    GsHomePage
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
