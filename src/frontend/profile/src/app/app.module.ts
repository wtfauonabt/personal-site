import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        HttpClientModule,

        NgxPageScrollCoreModule.forRoot({ duration: 500 }),

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
