import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent implements OnInit {

  constructor() { }

  errorMessagebool : false;
  msg : string = ""
  verifyForm : FormGroup;

  /**
   * 
   * Method Name  :  prepareVerifyForm()
   * Description :  This method will crete form group instance  
   * Author       : Pushpendra Rathor
   * Created on   : 01-03-2020
   * Updated on   : 01-03-2020
   * Updated By   :  Pushpendra Rathor
   * 
   */

  prepareVerifyForm(){
    this.verifyForm = new FormGroup({
      otp : new FormControl('',[Validators.required, Validators.maxLength(6), Validators.minLength(6)])
    })
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


  /**
   * 
   * Method Name  :  verifyOTP()
   * Description  : This method will remove error on focus of textbox
   * Author   :  Pushpendra Rathor
   * Created On   : 24-02-2020
   * Upadted On   : 24-02-2020
   * Updated By   : Pushpendra Rathor
   * 
   */

  verifyOTP(){
    
  }


  ngOnInit(): void {
    this.prepareVerifyForm()
  }

}
