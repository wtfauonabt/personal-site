import {
    ModuleWithProviders,
    NgModule,
    Optional,
    SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderModule } from './provider/provider.module'

import { throwIfAlreadyLoaded } from './module-import-guard';

export const CORE_PROVIDERS = [
];

@NgModule({
    imports: [
        CommonModule,
        ProviderModule,
    ],
    declarations: [
    ],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }

    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                ...CORE_PROVIDERS,
            ],
        };
    }
}
