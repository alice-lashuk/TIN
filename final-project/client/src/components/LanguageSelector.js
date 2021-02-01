import React from 'react'
import i18n from 'i18next';
import {Button} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

function LanguageSelector(props) {
  const t = props.t;
  const changeLanguage = (event) =>{
    i18n.changeLanguage(event.target.value);
    localStorage.setItem('language', event.target.value);
  }

  return (
    <div>
      <Button  variant="light" type="button" value="en" name="language"  onClick={changeLanguage}>{t('en.label')}</Button>
      <Button  variant="light" type="button" value="rus" name="language" onClick={changeLanguage}>{t('rus.label')}</Button>
    </div>
  )
}

export default withTranslation()(LanguageSelector);