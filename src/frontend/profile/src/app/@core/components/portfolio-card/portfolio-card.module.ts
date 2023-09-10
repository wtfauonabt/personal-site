import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioModalModule } from './../portfolio-modal/portfolio-modal.module';

import { PortfolioCardComponent } from './portfolio-card.component';

@NgModule({
    declarations: [
        PortfolioCardComponent
    ],
    exports: [
        PortfolioCardComponent
    ],
    imports: [
        CommonModule,

        PortfolioModalModule,
    ]
})
export class PortfolioCardModule { }
