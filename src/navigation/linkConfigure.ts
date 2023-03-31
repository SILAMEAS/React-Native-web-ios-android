import {NavigatorRoute} from './NavigatorRouteConstant';
import {Constant_Navigator} from '@src/navigation/Constant_Navigator';

const config = {
  screens: {
    [Constant_Navigator.NewP_PageGcu]: Constant_Navigator.NewP_PageGcu,
    [Constant_Navigator.NewP_PageGenerateCertificate]:
      Constant_Navigator.NewP_PageGenerateCertificate,

    [NavigatorRoute.DIALOG_SCREEN]: NavigatorRoute.DIALOG_SCREEN,
    [NavigatorRoute.HOME]: NavigatorRoute.HOME,
    [NavigatorRoute.FILE_PICKER]: NavigatorRoute.FILE_PICKER,
    [NavigatorRoute.FORGOT_PASSWORD]: NavigatorRoute.FORGOT_PASSWORD,
    [NavigatorRoute.PAGINATION_SCREEN]: NavigatorRoute.PAGINATION_SCREEN,
    [NavigatorRoute.SLIDE_SCREEN]: NavigatorRoute.SLIDE_SCREEN,
    [NavigatorRoute.TEST_COMPONENT]: NavigatorRoute.TEST_COMPONENT,
    [NavigatorRoute.TEST_API]: NavigatorRoute.TEST_API,
    [NavigatorRoute.SAMPLE_UI.MAIN]: {
      initialRouteName: NavigatorRoute.SAMPLE_UI.LANDING,
      screens: {
        [NavigatorRoute.SAMPLE_UI.LANDING]: NavigatorRoute.SAMPLE_UI.LANDING,
        [NavigatorRoute.SAMPLE_UI.SAMPLE_DETAIL]:
          NavigatorRoute.SAMPLE_UI.SAMPLE_DETAIL,
      },
    },
    [NavigatorRoute.SESSION.MAIN]: {
      initialRouteName: NavigatorRoute.SESSION.SESSION_SCREEN,
      screens: {
        [NavigatorRoute.SESSION.SESSION_SCREEN]:
          NavigatorRoute.SESSION.SESSION_SCREEN,
        [NavigatorRoute.SESSION.DOCUMENT_IN_PROGRESS_SCREEN]:
          NavigatorRoute.SESSION.DOCUMENT_IN_PROGRESS_SCREEN,
      },
    },
    [NavigatorRoute.UPLOAD_SCREEN]: NavigatorRoute.UPLOAD_SCREEN,
    [NavigatorRoute.TABLE_SCREEN]: NavigatorRoute.TABLE_SCREEN,
    [NavigatorRoute.PDF_EDITOR_SCREEN]: NavigatorRoute.PDF_EDITOR_SCREEN,
  },
};

export const linking = {
  prefixes: ['http://localhost:3000'],
  config,
};
