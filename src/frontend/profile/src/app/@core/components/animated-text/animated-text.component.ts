import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';

@Component({
    selector: 'sy-animated-text',
    templateUrl: './animated-text.component.html',
    styleUrls: ['./animated-text.component.scss']
})
export class AnimatedTextComponent implements OnInit {

    @Input() type: string = '';
    @Input() wordList: string[] = [];

    @Input() classList: string[] = [];

    @Input() animationSpeed: number = 70;

    @Output() animationCompleted = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit(): void {
    }

    onAnimationCompleted() {
        this.animationCompleted.emit(true);
    }
}
