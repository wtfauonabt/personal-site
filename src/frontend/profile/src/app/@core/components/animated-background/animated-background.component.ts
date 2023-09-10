import {
    Component,
    Input,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'sy-animated-background',
    templateUrl: './animated-background.component.html',
    styleUrls: ['./animated-background.component.scss']
})
export class AnimatedBackgroundComponent implements OnInit {

    @Input() type: string = '';

    constructor() { }

    ngOnInit(): void {
    }
}
