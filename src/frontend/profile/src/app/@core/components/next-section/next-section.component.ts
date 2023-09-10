import { ActiveSectionResolver } from './../../resolver/active-section.resolver';
import {
    Component,
    Inject,
    OnInit,
} from '@angular/core';
import {
    DOCUMENT,
    ViewportScroller
} from '@angular/common';

import { PageScrollService } from 'ngx-page-scroll-core';

import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
    selector: 'sy-next-section',
    templateUrl: './next-section.component.html',
    styleUrls: ['./next-section.component.scss']
})
export class NextSectionComponent implements OnInit {
    faAngleDown = faAngleDown;

    activeSectionSubscription?: Subscription;

    activeSection: string = '';
    constructor(
        private pageScrollService: PageScrollService,
        private scroller: ViewportScroller,
        @Inject(DOCUMENT) private document: any,
        private activeSectionResolver: ActiveSectionResolver,
    ) { }

    ngOnInit(): void {
    }

    subscribeActiveSection() {
        this.activeSectionSubscription = this.activeSectionResolver.subscribeActiveSectionChanges()
            .subscribe(activeSection => {
                this.activeSection = activeSection;
            })
    }

    onClickArrowDown(el: HTMLElement) {
        if (!el) {
            return;
        }
        el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        // this.scroller.scrollToPosition([0, 100]);
    }

    fullPageScroll(e: HTMLElement, i: any) {
        this.pageScrollService.scroll({
            scrollTarget: e,
            document: this.document,
        });
    }
}
