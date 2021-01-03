import React from 'react';
import { useTranslation } from 'react-i18next';

const App = (props) => {
  const { t } = useTranslation();

  return <h1>{t('App')}</h1>
};

export default (App);
