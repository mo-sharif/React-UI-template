import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private loginForm : FormGroup;
 
  constructor(public navCtrl: NavController,
    private formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
        userName: ['', Validators.required],
         password: ['', Validators.required],
    })

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.loginForm.value);
  }

}
