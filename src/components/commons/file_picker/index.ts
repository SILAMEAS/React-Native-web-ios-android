import {FilePickerMobile} from './FilePickerMobile';
import {FilePickerWeb} from './FilePickerWeb';
import {FilePickerMobileProps, FilePickerWebProps} from './type';
import {Platform} from 'react-native';

const FilePicker = Platform.OS === 'web' ? FilePickerWeb : FilePickerMobile;

export {FilePicker, FilePickerMobileProps, FilePickerWebProps};
