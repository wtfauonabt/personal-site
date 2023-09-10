import {
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExperienceModalComponent } from '../experience-modal/experience-modal.component';

import { ExperienceItem } from '../../interface/experience-item';
@Component({
    selector: 'sy-experience-card',
    templateUrl: './experience-card.component.html',
    styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {
    @Input() experienceItem?: ExperienceItem;

    constructor(
        private modalService: NgbModal,
    ) { }

    ngOnInit(): void {
    }

    onClickCard() {
        if (!this.experienceItem) {
            return;
        }
        const modalRef = this.modalService.open(ExperienceModalComponent);
        modalRef.componentInstance.experienceItem = this.experienceItem;
    }
}
