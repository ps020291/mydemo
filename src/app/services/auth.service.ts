import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Storages } from '../shared/storages.helper';
import { RestService } from '../shared/rest.service';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiController = "apifunctions/";
  private loggedIn = false;
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private _restService: RestService, private _router: Router) { }

  /**
   * 
   * Method Name  :  isLoggedIn
   * Description  :  This method will check user is loggedin or not
   * Author  :  Pushpendra Rathor
   * Created On :  12-02-2020
   * Updated on :  12-02-2020
   * Updated By   : Pushpnedra Rathor
   * 
   */

  isLoggedIn() {
    var data;
    if (isPlatformBrowser(this.platformId)) {
      data = Storages.getItem('LoggedIn');
    }
    return data ? true : false;
  }

  /**
   * 
   * Method Name  :   SignInAuth() 
   * Description  :   This Method will call Login API to Validate User Crdentials
   * Author       :   Pushpendra Rathor
   * Created On   :   12-02-2020
   * Updated on   :   12-02-2020
   * Updated By   :   Pushpendra Rathor
   */

  SignInAuth(data) {

    this.loggedIn = false;
    return this._restService.postURL(this.apiController + 'login', data).pipe(res => { return res; });
  }

  /**
   * 
   * Method Name  :   SignUp() 
   * Description  :   This Method will call Signup Api to Register New Buyer
   * Author       :   Pushpendra Rathor
   * Created On   :   12-02-2020
   * Updated on   :   12-02-2020
   * Updated By   :   Pushpendra Rathor
   */

  SignUp(data) {
    return this._restService.postURL(this.apiController + 'signup', data).pipe(res => { return res; });
  }


  /**
 * 
 * Method Name :  Logout() 
 * Description  : This Method will call logout API to Session Timeout and logout
 * Author  : Pushpendra Rathor
 * Created On :  12-02-2020
 * Updated on  : 12-02-2020
 * Updated By : Pushpendra Rathor
 */

  logout() {
    return this._restService.fetchSecureURL(this.apiController + "logout").pipe(res => { return res; });
  }

  /**
   * 
   * Method Name  :  logoutByTokenExpire() 
   * Description  : This Method will check Current Loggedin User Session if User token do not match
   * Author       : Pushpendra Rathor
   * Created On   :  19-07-2019
   * Updated on   : 19-07-2019
   * Updated By   : Pushpendra Rathor
 */

  logoutByTokenExpire() {
    if (isPlatformBrowser(this.platformId)) {
      let data = Storages.clearAll();
      this.loggedIn = false;
    }
    this._router.navigateByUrl("");
  }


}
