import {
    Component,
    OnInit,
} from '@angular/core';

import { MenuService } from '@core/service/menu.service';

import { MenuItem } from '@core/interface/menu-item';

@Component({
    selector: 'sy-block-menu',
    templateUrl: './block-menu.component.html',
    styleUrls: ['./block-menu.component.scss']
})
export class BlockMenuComponent implements OnInit {

    menuList: MenuItem[] = [];
    constructor(
        private menuService: MenuService,
    ) { }

    ngOnInit(): void {
        this.menuList = this.menuService.menuList;
    }

}
