import {
    Component,
    Input,
    OnInit,
} from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ExperienceItem } from '@core/interface/experience-item';

@Component({
    selector: 'sy-experience-modal',
    templateUrl: './experience-modal.component.html',
    styleUrls: ['./experience-modal.component.scss']
})
export class ExperienceModalComponent implements OnInit {

    @Input() experienceItem?: ExperienceItem;

    constructor(
        public activeModal: NgbActiveModal,
    ) { }

    ngOnInit(): void {
    }
}
