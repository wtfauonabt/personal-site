import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { OnChanges } from '@angular/core';

@Component({
    selector: 'sy-typing',
    templateUrl: './typing.component.html',
    styleUrls: ['./typing.component.scss'],
})
export class TypingComponent implements OnChanges {

    @Input() wordList: string[] = [];
    @Input() classList: string[] = [];

    @Output() animationCompleted = new EventEmitter<boolean>();

    display: string = '';
    lineIndex = 0;
    sentenceIndex = 0;

    movingForward = true;
    @Input() counterForDelay = 0;
    @Input() delayLength = 15;
    @Input() animationSpeed = 50;

    intervalId: any;

    constructor() { }

    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        if (changes && changes['wordList']) {
            this.initEffect();
        }
    }

    initEffect() {

        if (!this.wordList || this.wordList.length <= 0) {
            return;
        }

        this.intervalId = setInterval(() => {
            if (this.movingForward) {
                if (this.sentenceIndex >= this.wordList[this.lineIndex].length) {
                    ++this.counterForDelay;
                    if (this.counterForDelay === this.delayLength) {
                        this.movingForward = false;
                        this.counterForDelay = 0;
                    }
                }
            } else {
                if (this.sentenceIndex == 0) {
                    this.movingForward = true;
                    this.lineIndex++;
                    if (this.lineIndex >= this.wordList.length) {
                        clearInterval(this.intervalId);
                        this.animationCompleted.emit(true);
                        return;
                    }
                }
            }
            this.display += this.wordList[this.lineIndex].slice(this.sentenceIndex, this.sentenceIndex + 1);
            if (this.counterForDelay == 0) {
                if (this.movingForward) {
                    this.sentenceIndex++;
                }
                else {
                    this.display += '\n'
                    this.sentenceIndex = 0;
                }
            }
        }, this.animationSpeed);

    }
}