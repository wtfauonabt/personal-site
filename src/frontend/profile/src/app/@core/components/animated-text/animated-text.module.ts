import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedTextComponent } from './animated-text.component';
import { TypingComponent } from './typing/typing.component';



@NgModule({
    declarations: [
        AnimatedTextComponent,
        TypingComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AnimatedTextComponent,
    ]
})
export class AnimatedTextModule { }
