import {
    Component,
    OnInit,
} from '@angular/core';

import { environment } from '@environment/environment';

@Component({
    selector: 'sy-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    version: string = environment.version;
    constructor() { }

    ngOnInit(): void {
    }

}
