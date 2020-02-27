import {observable} from 'mobx';
import Constants from '../constants/Constants';

class MenuStore {
  @observable isLogin = false;

  setLogin = () => {
    this.isLogin = true;
  };

  setLogout = () => {
    this.isLogin = false;
    Constants.USER_ACCESS_TOKEN = '';
    Constants.USER_REFRESH_TOKEN = null;
  };
}

export default new MenuStore();
