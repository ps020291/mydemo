import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { isPlatformBrowser } from '@angular/common';
import { Storages } from './storages.helper';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  token = "";

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private _httpClient: HttpClient) {
    if (isPlatformBrowser(this.platformId)) {
      this.token = Storages.getToken();
    }
  }

  private secureHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.token });
  private requestHeader: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': '' });


  /**
   * 
   * Method Name :  fetchURL
   * Description : This method will call API with GET method
   * Author  :  Pushpendra Rathor
   * Created On :  11-02-2020
   * Updated on :  11-02-2020
   * Updated By : Pushpendra Rathor
   * 
   */

  fetchURL(url) {
    return this._httpClient.get<RestResponse>(this.getURL(url), { headers: this.requestHeader });
  }

  /**
   * 
   * Method Name :  fetchSecureURL
   * Description : This method will call API with GET method
   * Author  :  Pushpendra Rathor
   * Created On :  11-02-2020
   * Updated on :  11-02-2020
   * Updated By : Pushpendra Rathor
   * 
   */

  fetchSecureURL(url) {
    return this._httpClient.get<RestResponse>(this.getURL(url));
  }


  /**
   * 
   * Method Name :  postURL
   * Description : This method will call API with POST method
   * Author  :  Pushpendra Rathor
   * Created On :  11-02-2020
   * Updated on :  11-02-2020
   * Updated By : Pushpendra Rathor
   * 
   */

  postURL(url, data) {
    return this._httpClient.post<RestResponse>(this.getURL(url), data, { headers : this.requestHeader} );
  }


  /**
   * 
   * Method Name :  postSecureURL
   * Description : This method will call API with POST method
   * Author  :  Pushpendra Rathor
   * Created On :  11-02-2020
   * Updated on :  11-02-2020
   * Updated By : Pushpendra Rathor
   * 
   */

  postSecureURL(url, data) {
    return this._httpClient.post<RestResponse>(this.getURL(url), data);
  }

  
  
  /**
   * 
   * Method Name :  deleteURL
   * Description : This method will call API with Delete method
   * Author  :  Pushpendra Rathor
   * Created On :  11-02-2020
   * Updated on :  11-02-2020
   * Updated By : Pushpendra Rathor
   * 
   */

  deleteURL(url) {
    return this._httpClient.delete<RestResponse>(this.getURL(url),  { headers : this.requestHeader});
  }


  /**
   * 
   * Method Name :  deleteSecureURL
   * Description : This method will call API with DELETE method
   * Author  :  Pushpendra Rathor
   * Created On :  11-02-2020
   * Updated on :  11-02-2020
   * Updated By : Pushpendra Rathor
   * 
   */

  deleteSecureURL(url) {
    return this._httpClient.delete<RestResponse>(this.getURL(url));
  }

  
  /**
   * 
   * Method Name :  getURL() 
   * Description  : This Method will get API URL from envoironment and add API path to base url 
   * Author  : Pushpendra Rathor
   * Created On :  11-02-2020
   * Updated on  : 11-02-2020
   * Updated By : Pushpendra Rathor
  */
  getURL(path) {
    return environment.apiPath + path;
  }
  
}

interface RestResponse {
  count?: number,
  status: boolean,
  data?: any,
  msg: string,
  error?: string,

}
