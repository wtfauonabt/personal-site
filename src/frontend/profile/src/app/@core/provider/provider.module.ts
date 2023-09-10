
import {
    NgModule,
    ModuleWithProviders,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { MenuService } from '@core/service/menu.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [
        MenuService,
    ],
})
export class ProviderModule {
    static forRoot(): ModuleWithProviders<ProviderModule> {
        return {
            ngModule: ProviderModule,
        };
    }
}
