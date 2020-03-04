export class Storages {

    
    /**
 * 
 * Method Name :  storeSessionInfo() 
 * Description  : This Method will Store Token and loginStatus into Local Storage
 * Author  : Pushpendra Rathor
 * Created On :  11-02-2020
 * Updated on  : 11-02-2020
 * Updated By : Pushpendra Rathor
 */
  
 static storeSessionInfo(res) {
      Storages.clearAll();
      Storages.store("token", res.data);
      Storages.store("LoggedIn", true);

  }

  /**
   * 
   * Method Name :  isLoggedIn() 
   * Description  : This Method will get LoggedIn key from Storage
   * Author  : Pushpendra Rathor
   * Created On :  11-02-2020
   * Updated on  : 11-02-2020
   * Updated By : Pushpendra Rathor
  */
  
  static isLoggedIn() {
      let data = Storages.getItem("LoggedIn");
      return data ? true : false;
  }


  /**
   * 
   * Method Name :  getToken() 
   * Description  : This Method will get token key from Storage
   * Author  : Pushpendra Rathor
   * Created On :  11-02-2020
   * Updated on  : 11-02-2020
   * Updated By : Pushpendra Rathor
  */
  static getToken(){
      return localStorage.getItem('token');
  }

  /**
   * 
   * Method Name :  clearAll() 
   * Description  : This Method will clear local storage
   * Author  : Pushpendra Rathor
   * Created On :  11-02-2020
   * Updated on  : 11-02-2020
   * Updated By : Pushpendra Rathor
  */ 
  static clearAll() {
      localStorage.removeItem("LoggedIn");
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.removeItem("page");
      localStorage.removeItem("productId");
      localStorage.removeItem("productName");
      localStorage.removeItem("selected_address");
      // localStorage.clear();
  }

  /**
   * 
   * Method Name :  store() 
   * Description  : This Method will store value into localstorage based on key and value
   * Author  : Pushpendra Rathor
   * Created On :  11-02-2020
   * Updated on  : 11-02-2020
   * Updated By : Pushpendra Rathor
  */
  private static store(key, value) {
      localStorage.setItem(key, value);
  }
  
  static tokenExpire(){
      
  }

  /**
   * 
   * Method Name :  geItem() 
   * Description  : This Method will get value from  localstorage based on key
   * Author  : Pushpendra Rathor
   * Created On :  11-02-2020
   * Updated on  : 11-02-2020
   * Updated By : Pushpendra Rathor
  */
  static getItem(key) {
      return localStorage.getItem(key);
  }
}