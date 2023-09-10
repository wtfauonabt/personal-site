import {
    RouterModule,
    Routes,
} from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
        {
            path: '',
            loadChildren: () => import('./home/home.module')
                .then(m => m.HomePageModule),
        },
        {
            path: '**',
            redirectTo: 'home'
        },
    ],
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class PagesRoutingModule {
}
