/***
 * Filename: login.component.ts
 * Author  : Duncan Tilley
 * Class   : LoginComponent / <login>
 * 
 *     The login form of the mapper. Simply asks for the username and password.
 ***/

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [ApiService]
})
export class LoginComponent {

    email: string;
    password: string;

    result: Object;

    constructor(private router: Router, private api: ApiService) {
        this.email = "";
        this.password = "";
    }

    onSubmit() {
        // verify the user login details
        // TODO hash and possibly salt password
        this.api.getUsers()
            .subscribe(
                result => this.onRequestReceive(result),
                error => console.error('Error: ' + error),
                () => console.log("Login request complete")
            );
        //window.alert(this.result);
        //this.router.navigateByUrl("/mapper");
    }

    onRequestReceive(object: Object) {
        window.alert(object);
    }

}
