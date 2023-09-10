import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar.component';
import { SvgModule } from '../svg/svg.module';

@NgModule({
    imports: [
        CommonModule,

        SvgModule,
    ],
    declarations: [
        NavbarComponent
    ],
    exports: [
        NavbarComponent,
    ]
})
export class NavbarModule { }
