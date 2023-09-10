import { ActiveSectionResolver } from './../../@core/resolver/active-section.resolver';
import {
    Component,
    OnInit,
    Inject,
    HostListener,
} from '@angular/core';
import {
    ViewportScroller,
    DOCUMENT,
} from '@angular/common';

import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import * as smoothscroll from "smoothscroll-polyfill";

import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    constructor(
        private activeSectionResolver: ActiveSectionResolver,
    ) {
        smoothscroll.polyfill();
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    }


    @HostListener('window:scroll', ['$event'])
    scrollHandler($event: any) {
        // console.log($event);
    }
}
