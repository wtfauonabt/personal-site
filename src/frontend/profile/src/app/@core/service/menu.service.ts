import { Injectable } from '@angular/core';
import { MenuItem } from '@core/interface/menu-item';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    menuList: MenuItem[] = [
        {
            name: 'Profile',
            endpoint: '#profile',
        },
        {
            name: 'Portfolio',
            endpoint: '#portfolio',
        },
        {
            name: 'Skill',
            endpoint: '#skill',
        },
        {
            name: 'Experience',
            endpoint: '#experience',
        },
        {
            name: 'Education',
            endpoint: '#education',
        },
        {
            name: 'Contact Me',
            endpoint: '#contact-me',
        },
        {
            name: 'CV Download',
            endpoint: 'assets/files/Curriculum Vitae Chi Fung Stanley Yeung_20220705.pdf',
        },
    ];

    constructor() { }
}
