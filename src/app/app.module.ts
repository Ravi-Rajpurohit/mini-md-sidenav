import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MdSidenavModule,MdButtonModule,MdIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MdListModule} from '@angular/material';
import { Component1Component } from './component-1/component-1.component';
import { Component2Component } from './component-2/component-2.component';
import { Component3Component } from './component-3/component-3.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '1', component: Component1Component },
  { path: '2', component: Component2Component },
  {
    path: '3',
    component: Component3Component,
  },
  { path: '',
    redirectTo: '/1',
    pathMatch: 'full'
  },
  { path: '**', component: Component1Component }
];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    Component1Component,
    Component2Component,
    Component3Component
  ],
  imports: [
    BrowserModule,
    MdSidenavModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdIconModule,
    FlexLayoutModule,
    MdListModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
