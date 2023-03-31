import ViewPdfWeb from './ViewPdf.web';
import ViewPdfNative from './ViewPdf.native';
import {Platform} from 'react-native';

const ViewPdf = Platform.OS === 'web' ? ViewPdfWeb : ViewPdfNative;

export {ViewPdf};
