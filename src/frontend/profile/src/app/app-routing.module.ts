import { NgModule } from '@angular/core';
import {
    PreloadAllModules,
    RouterModule,
    Routes
} from '@angular/router';

export const routes: Routes = [
    // {
    //     path: 'auth',
    //     loadChildren: () => import('./auth/auth.module')
    //         .then(m => m.AuthPageModule),
    // },
    {
        path: '',
        loadChildren: () => import('@pages/pages.module')
            .then(m => m.PagesModule),
    },
    { path: '**', redirectTo: 'pages' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
