import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceModalModule } from '../experience-modal/experience-modal.module';

import { ExperienceCardComponent } from './experience-card.component';

@NgModule({
    declarations: [
        ExperienceCardComponent
    ],
    exports: [
        ExperienceCardComponent
    ],
    imports: [
        CommonModule,

        ExperienceModalModule,
    ]
})
export class ExperienceCardModule { }
