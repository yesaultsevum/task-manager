//import {Component, FormBuilder, Validators} from 'anngular2/angular2'
import {Component, OnInit, FormBuilder, Validators} from 'angular2/common';
import {Router} from 'angular2/router';

@Component({
    selector: 'login-page',
    templateUrl: 'templates/_auth.html'
})

export class AuthComponent{
    constructor(fb: FormBuilder){

        this.loginForm =fb.group({
        
            username:["", Validators.required],
            password:["", Validators.required],
            password:["", Validators.minLength(6)]
        
        });
    }
    doLogin(event){
        console.log(this.loginForm.value);
        event.preventDefault();
    }

}
