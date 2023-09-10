import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextSectionComponent } from './next-section.component';



@NgModule({
    declarations: [
        NextSectionComponent
    ],
    exports: [
        NextSectionComponent
    ],
    imports: [
        CommonModule
    ]
})
export class NextSectionModule { }
