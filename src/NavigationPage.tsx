import * as React from 'react';
import WindowNavigation from './components/shortcutCategories/WindowNavigation'
import NavigationHistory from './components/shortcutCategories/NavigationHistory'

export const NavigationPage: React.FunctionComponent<{}> = () => {
  return <>
    <WindowNavigation />
    <NavigationHistory />
  </>;
};
