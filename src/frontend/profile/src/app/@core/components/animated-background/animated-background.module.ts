import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimatedBackgroundComponent } from './animated-background.component';
import { MovingShapesComponent } from './moving-shapes/moving-shapes.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AnimatedBackgroundComponent,
        MovingShapesComponent
    ],
    exports: [
        AnimatedBackgroundComponent,
    ]
})
export class AnimatedBackgroundModule { }
