import React from 'react';
import { useTranslation } from 'react-i18next';

const Main = (props) => {
  const { t } = useTranslation();

  return <h1>{t('App')}</h1>;
};

export default (Main);
