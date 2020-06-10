import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Component1Component } from './component-1/component-1.component';
import { Component2Component } from './component-2/component-2.component';
import { Component3Component } from './component-3/component-3.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const appRoutes: Routes = [
	{ path: '1', component: Component1Component },
	{ path: '2', component: Component2Component },
	{
		path: '3',
		component: Component3Component,
	},
	{ path: '', redirectTo: '/1', pathMatch: 'full' },
	{ path: '**', component: Component1Component },
];

@NgModule({
	declarations: [
		AppComponent,
		SidenavComponent,
		Component1Component,
		Component2Component,
		Component3Component,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatListModule,
		MatSidenavModule,
		MatButtonModule,
		MatIconModule,
		FlexLayoutModule,
		RouterModule.forRoot(
			appRoutes
			// { enableTracing: true } // <-- debugging purposes only
		),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
