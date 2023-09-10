import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ActiveSectionResolver implements Resolve<boolean> {
    private _activeSection: string = '';
    private _activeSection$ = new BehaviorSubject(this._activeSection);

    constructor(
    ) { }

    subscribeActiveSectionChanges() {
        return this._activeSection$.asObservable();
    }

    get activeSection() {
        return this._activeSection;
    }

    set activeSection(activeSection) {
        this._activeSection = activeSection;
        this._activeSection$.next(this._activeSection);
    }

    async clean() {
        this.activeSection = '';
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return of(true);
    }
}
