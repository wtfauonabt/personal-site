import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sy-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    titleWordList: string[] = [
        'Stanley Yeung',
        'Project Manager / Full Stack Developer',

    ];

    profileWordList: string[] = [];

    constructor() { }

    ngOnInit(): void {
    }

    onTitleAnimationComplete() {
        this.profileWordList = [
            'Experienced Information Technology Consultant with a demonstrated history of working in the industry.',
            'Highly developed skills in problem identification and implementation of effective solutions.',
            'Comfortable with analyzing and understanding data, working under time pressure, and presenting myself in a professional manner.',
            'Excellent interpersonal communication and social skills built through previous work environments.',
            'A friendly, mature, and flexible individual with a proven entrepreneurial approach towards objectives and tasks.',
        ]
    }

}
