import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'sy-contact-me',
    templateUrl: './contact-me.component.html',
    styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
    message: string = '';

    contactForm = new FormGroup({
        name: new FormControl(),
        email: new FormControl(),
        phone: new FormControl(),
        message: new FormControl(),
    });

    humanCheck: string = '';

    constructor() { }

    ngOnInit(): void {
    }

    onSubmitForm() {
        console.log(this.contactForm);
    }
}
