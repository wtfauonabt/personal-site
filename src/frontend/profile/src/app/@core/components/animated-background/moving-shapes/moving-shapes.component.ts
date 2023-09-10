import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sy-moving-shapes',
    templateUrl: './moving-shapes.component.html',
    styleUrls: ['./moving-shapes.component.scss']
})
export class MovingShapesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        console.debug('MovingShapesComponent');
    }

}
