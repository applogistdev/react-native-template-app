import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({

  //color
  $gColor: '#0871b8',
  $gListHeader: '#0085C3',
  $gListItemView: '#0085C3',

  //google
  $googleRed: '#ea4335',
  $googleYellow: '#fbbc05',
  $googleGreen: '#34a853',
  $googleBlue: '#4285f4',

  //button
  $gButtonPrimary: '#0085C3',
  $gButtonError: 'red',


  //font family
  $gFontBold: 'SourceSansPro-Bold',
  $gFontSemiBold: 'SourceSansPro-Semibold',
  $gFontRegular: 'SourceSansPro-Regular',
  $gFontLight: 'SourceSansPro-Light',

  //tablet, phone size
  // http://iosres.com/
  /**
   *  iphone 4 = 320
   *  iphone 8 = 375
   *  iphone 8 max/plus = 414
   *  ipad mini/air = 768
   *  ipad pro 10.5" = 834
   */

  '@media (max-width: 321)': {
    //iphone 4, 5

  },

  '@media ios and (min-width: 321) and (max-width: 376)': {
    //iphone 6,7,8,X

  },

  '@media android and (min-width: 321) and (max-width: 376)': {
    //iphone 6,7,8,X

  },

  '@media (min-width: 376) and (max-width: 600)': {
    //iphone pro, iphpne X plus, iphone xs max, iphone 8 plus vs

  },

  '@media (min-width: 600) and (max-width: 835)': {
    //ipad pro 9.7", ipad pro 11"

  },

  '@media (min-width: 835) and (max-width: 5000)': {
    //ipad pro 12.9"

  },

  //ios
  '@media ios': {

  },
  '@media android': {

  },
});
