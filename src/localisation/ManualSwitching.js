import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import * as RNLocalize from 'react-native-localize';

const options = [
  {label: 'English', value: 'en'},
  {label: 'French', value: 'fr'},
  {label: 'Italion', value: 'it'},
];

const ManualSwitching = () => {
  const {t, i18n} = useTranslation();

  function selectLanguage() {
    if (i18n.language == 'en') {
      return 0;
    } else if (i18n.language == 'fr') {
      return 1;
    } else if (i18n.language == 'it') {
      return 2;
    } else {
      return 0;
    }
  }

  return (
    <View style={{height: '100%'}}>
      <View style={{marginTop: 20}}>
        <SwitchSelector
          options={options}
          initial={selectLanguage()}
          onPress={(language) => {
            i18n.changeLanguage(language);
          }}
        />
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 26, textAlign: 'center', color: 'black'}}>
          {t('WelcomeText')}
        </Text>
      </View>
    </View>
  );
};

export default ManualSwitching;
