import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {linking} from '@src/navigation/linkConfigure';
import {DrawerNavigator} from '@src/navigation/RootNavigator';

export default function Root() {
  // check it UI test api or UI docusign

  return (
    <NavigationContainer linking={linking as any}>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
