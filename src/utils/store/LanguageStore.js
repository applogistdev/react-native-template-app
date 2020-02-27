import {observable} from 'mobx';
import * as RNLocalize from 'react-native-localize';

const languageTR = require('../languages/tr.json');
const languageEN = require('../languages/en.json');

class MenuStore {
  @observable resource =
    RNLocalize.getLocales()[0].languageCode === 'tr' ? languageTR : languageEN;
}

export default new MenuStore();
