import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {App} from './app';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../routes/routes';
import {ComponentModule} from '../components/component-module';
import {AppStateService} from '../services/app-state.service';


@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppStateService],
  bootstrap: [App]
})
export class AppModule { }
