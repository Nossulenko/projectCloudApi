import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from "../../providers/auth.service";
import {Account} from "../../models/account/account.interface";
import { LoginResponse } from "../../models/login/login-response.interface";
import { NavController } from 'ionic-angular/navigation/nav-controller';
@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {

  account = {} as Account
  @Output() registerStatus: EventEmitter<LoginResponse>

  constructor(private auth: AuthService, private navCtrl: NavController) {
    this.registerStatus = new EventEmitter<LoginResponse>();
  }
  async register(){
    try {
    const result = await 
    this.auth.createUserWithEmailAndPassword(this.account);
    this.registerStatus.emit(result);
    
    }
    catch(e)
    {
      console.error(e);
      this.registerStatus.emit(e);
    }
  }

}
