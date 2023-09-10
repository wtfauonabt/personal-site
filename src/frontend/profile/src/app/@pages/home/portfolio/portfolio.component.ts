import {
    Component,
    OnInit,
} from '@angular/core';
import { PortfolioService } from '@core/service/portfolio.service';
import { PortfolioItem } from './../../../@core/interface/portfolio-item';

@Component({
    selector: 'sy-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

    portfolioList: PortfolioItem[] = [];

    constructor(
        private portfolioService: PortfolioService,
    ) { }

    ngOnInit(): void {
        this.portfolioList = this.portfolioService.portfolioList.reverse();
    }

}
