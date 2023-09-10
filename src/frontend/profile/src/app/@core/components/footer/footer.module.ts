import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FooterComponent } from './footer.component';

@NgModule({
    declarations: [
        FooterComponent
    ],
    exports: [
        FooterComponent
    ],
    imports: [
        CommonModule,

        FontAwesomeModule,
    ],
})
export class FooterModule { }
