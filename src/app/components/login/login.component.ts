import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessagebool: boolean = false;
  buttonDisabled: boolean = true;
  msg = ""

  constructor() { }


  /**
   * 
   * Method Name  : InitForm()
   * Description  :  This Method will Create form group model
   * Author       :  24-02-2020
   * Updated On   :  24-02-2020
   * Updated By   : Pushpendra Rathor
   * 
   */

  InitForm() {
    this.loginForm = new FormGroup({
      mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
    })
  }

  /**
   * 
   * Method Name  :  login
   * Description  : This method will validate user based on Mobile number 
   * Author        :  Pushpendra Rathor
   * Created On :  24-02-2020
   * Updated On :  24-02-2020
   * Updated By  : Pushpendra Rathor
   * 
   */


  login() {
    var mobile = this.loginForm.get('mobile').value;
    if (mobile == "") {
      this.errorMessagebool = true;
      this.msg = "Please Enter Mobile Number";
    } else if (mobile.length != 10) {
      this.errorMessagebool = true;
      this.msg = "Please Enter 10 Digit Mobile Number";
    } else {
      this.buttonDisabled = true;
    }

  }

  /**
   * 
   * Method Name  :  removeError()
   * Description  : This method will remove error on focus of textbox
   * Author   :  Pushpendra Rathor
   * Created On   : 24-02-2020
   * Upadted On   : 24-02-2020
   * Updated By   : Pushpendra Rathor
   * 
   */

   removeError(){
     this.msg = "";
     this.errorMessagebool = false;
   }


  ngOnInit(): void {
    this.InitForm();
  }

}
