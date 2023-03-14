import i18next from "i18next";
import English from './languages/english.json';
import French from './languages/french.json';
import Italion from './languages/italion.json';
import * as RNLocalize from 'react-native-localize';

import { initReactI18next } from "react-i18next";

const languageDetector ={
  type:'languageDetector',
  async:true,
  detect:(callback)=>{
    return(
      callback(RNLocalize.getLocales()[0].languageCode)
    )
  },
init:()=>{},
cacheUserLanguage:()=>{}
}

i18next
.use(languageDetector)
.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng:'en', //choosing default language as english
  resources:{
    en:English,
    it:Italion,
    fr:French,
  },
  react:{
    useSuspense:false,
  },
});

export default i18next;