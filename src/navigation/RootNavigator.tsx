import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Constant_Navigator} from '@src/navigation/Constant_Navigator';
import {Localization} from '@src/i18n/languages';
import {useTranslation} from 'react-i18next';
import Home from '@screens/UI-eletronic-sign/page/home/Home';
import Login from '@screens/UI-eletronic-sign/page/login/Login';
import {AuthContextP} from '@src/components/authentication/authContext';
import SuperUser from '@screens/UI-eletronic-sign/page/login/super/SuperUser';
import Corporate from '@screens/UI-eletronic-sign/page/login/corporate/Corporate';
import EndUser from '@screens/UI-eletronic-sign/page/login/endUser/endUser';
import {AuthContext} from '@components/authentication/authProvider';
import CreateCompanyAccount from '@screens/UI-eletronic-sign/page/login/super/createCompanyAccount/CreateCompanyAccount';
import DisactivateCorporate from '@screens/UI-eletronic-sign/page/login/super/disactivateCorporate/DisactivateCorporate';
const Drawer = createDrawerNavigator();
export const DrawerNavigator = () => {
  const [Eletronic] = useState<'none' | 'flex' | undefined>('flex');
  const {t} = useTranslation();
  const {state, authContext} = AuthContextP();

  console.log(state.userToken);

  return (
    <AuthContext.Provider value={authContext}>
      <Drawer.Navigator
        useLegacyImplementation
        // initialRouteName={NavigatorRoute.HOME}
        initialRouteName={
          state.userToken
            ? Constant_Navigator.PAGE_HOME_ELECTRONIC
            : Constant_Navigator.PAGE_LOGIN_ELECTRONIC
        }
      >
        {/* UI Eletronic Sign*/}
        {state.userToken ? (
          <>
            <Drawer.Screen
              name={Constant_Navigator.PAGE_SUPER_USER_ELECTRONIC}
              component={SuperUser}
              options={{
                headerShown: false,
                title: t(Localization('pdfEditor')) ?? '',
                drawerItemStyle: {display: Eletronic},
              }}
            />
            <Drawer.Screen
              name={Constant_Navigator.PAGE_HOME_ELECTRONIC}
              component={Home}
              options={{
                headerShown: false,
                title: t(Localization('pdfEditor')) ?? '',
                drawerItemStyle: {display: Eletronic},
              }}
            />
            <Drawer.Screen
              name={Constant_Navigator.PAGE_CORPORATE_ELECTRONIC}
              component={Corporate}
              options={{
                headerShown: false,
                title: t(Localization('pdfEditor')) ?? '',
                drawerItemStyle: {display: Eletronic},
              }}
            />

            <Drawer.Screen
              name={Constant_Navigator.PAGE_END_USER_ELECTRONIC}
              component={EndUser}
              options={{
                headerShown: false,
                title: t(Localization('pdfEditor')) ?? '',
                drawerItemStyle: {display: Eletronic},
              }}
            />
            <Drawer.Screen
              name={Constant_Navigator.PAGE_CREATE_COMPANY_ACCOUNT_ELECTRONIC}
              component={CreateCompanyAccount}
              options={{
                headerShown: false,
                title: t(Localization('pdfEditor')) ?? '',
                drawerItemStyle: {display: Eletronic},
              }}
            />
            <Drawer.Screen
              name={Constant_Navigator.PAGE_DIS_ACTIVATE_ELECTRONIC}
              component={DisactivateCorporate}
              options={{
                headerShown: false,
                title: t(Localization('pdfEditor')) ?? '',
                drawerItemStyle: {display: Eletronic},
              }}
            />
          </>
        ) : (
          <>
            <Drawer.Screen
              name={Constant_Navigator.PAGE_LOGIN_ELECTRONIC}
              component={Login}
              options={{
                headerShown: false,
                title: t(Localization('pdfEditor')) ?? '',
                drawerItemStyle: {display: Eletronic},
              }}
            />
          </>
        )}
      </Drawer.Navigator>
    </AuthContext.Provider>
  );
};
