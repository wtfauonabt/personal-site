import {
    Component,
    Input,
    OnInit,
} from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { PortfolioItem } from '@core/interface/portfolio-item';

@Component({
    selector: 'sy-portfolio-modal',
    templateUrl: './portfolio-modal.component.html',
    styleUrls: ['./portfolio-modal.component.scss']
})
export class PortfolioModalComponent implements OnInit {

    @Input() portfolioItem?: PortfolioItem;

    constructor(
        public activeModal: NgbActiveModal,
    ) { }

    ngOnInit(): void {
    }
}
