import {
    Component,
    Input,
    OnChanges,
    SimpleChanges,
} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {
    DomSanitizer,
    SafeHtml,
} from '@angular/platform-browser';

@Component({
    selector: 'sy-svg',
    templateUrl: './svg.component.html',
    styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnChanges {

    @Input() filePath?: string;

    svgContent?: SafeHtml;

    constructor(
        private httpClient: HttpClient,
        private sanitizer: DomSanitizer,
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        if (changes && changes['filePath']) {
            this.initSvgContent();
        }
    }

    initSvgContent(): void {
        if (!this.filePath) {
            return;
        }
        this.httpClient
            .get(`${this.filePath}`, { responseType: 'text' })
            .subscribe(value => {
                this.svgContent = this.sanitizer.bypassSecurityTrustHtml(value);
            });
    }

}
