import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {TechsModule} from './techs';

import {MenuComponent} from './menu/menu-component';
import {DashboardComponent} from './dashboard/dashboard-component';

import {MainComponent} from './main';
import {HeaderComponent} from './header';
import {TitleComponent} from './title';
import {FooterComponent} from './footer';

@NgModule({
  imports: [
    BrowserModule,
    TechsModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent,
    MenuComponent,
    DashboardComponent
  ],
  bootstrap: [MainComponent]
})
export class AppModule {} 