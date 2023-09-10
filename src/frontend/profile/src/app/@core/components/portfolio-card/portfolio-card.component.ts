import {
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioModalComponent } from '../portfolio-modal/portfolio-modal.component';

import { PortfolioItem } from './../../interface/portfolio-item';
@Component({
    selector: 'sy-portfolio-card',
    templateUrl: './portfolio-card.component.html',
    styleUrls: ['./portfolio-card.component.scss']
})
export class PortfolioCardComponent implements OnInit {
    @Input() portfolioItem?: PortfolioItem;

    constructor(
        private modalService: NgbModal,
    ) { }

    ngOnInit(): void {
    }

    onClickCard() {
        if (!this.portfolioItem) {
            return;
        }
        const modalRef = this.modalService.open(PortfolioModalComponent);
        modalRef.componentInstance.portfolioItem = this.portfolioItem;
    }
}
