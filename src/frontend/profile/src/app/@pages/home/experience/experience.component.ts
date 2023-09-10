import { ExperienceService } from './../../../@core/service/experience.service';
import { Component, OnInit } from '@angular/core';
import { ExperienceItem } from '@core/interface/experience-item';

@Component({
    selector: 'sy-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

    experienceList: ExperienceItem[] = [];

    constructor(
        private experienceService: ExperienceService,
    ) { }

    ngOnInit(): void {
        this.experienceList = this.experienceService.experienceList.reverse();
    }

}
