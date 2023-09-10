import {
    Component,
    OnInit,
} from '@angular/core';
import { MenuService } from '@core/service/menu.service';

import { MenuItem } from '@core/interface/menu-item';
@Component({
    selector: 'sy-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    menuList: MenuItem[] = [];

    constructor(
        private menuService: MenuService,
    ) { }

    ngOnInit(): void {
        this.menuList = this.menuService.menuList;
    }
}
