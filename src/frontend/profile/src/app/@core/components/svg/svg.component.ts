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
    @Input() color: string = 'grey';

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
                value = this.modifyFillColor(value);
                this.svgContent = this.sanitizer.bypassSecurityTrustHtml(value);
                console.log(value);
            });
    }


    modifyFillColor(svg: string): string {
        const parser = new DOMParser();
        const doc = parser.parseFromString(svg, 'image/svg+xml');
        const svgElement = doc.getElementsByTagName('svg')[0];
        const paths = svgElement.getElementsByTagName('path');
    
        for (let i = 0; i < paths.length; i++) {
          const path = paths[i];
          path.setAttribute('fill', this.color);
        }
    
        return new XMLSerializer().serializeToString(svgElement);
      }
}
