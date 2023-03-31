import {StyleProp, ViewStyle} from 'react-native';
interface Type {
  rowFront: StyleProp<ViewStyle>;
  rowBack: StyleProp<ViewStyle>;
  backRightBtn: StyleProp<ViewStyle>;
  backRightBtnLeft: StyleProp<ViewStyle>;
  backRightBtnRight: StyleProp<ViewStyle>;
}
// export const fullH{
//   h: {[(Platform.OS === 'web' ? '100vh' : '100%', '100vh')]};
// };
export class COLOR {
  static readonly BackGroundDocuSign = '#f4f4f4';
  static readonly Border = {
    borderActivity: {
      borderBottomWidth: 1,
      borderBottomColor: 'gray.200',
      py: 2,
    },
  };
  static readonly Text = {
    title1: {
      fontWeigh: 'semibold',
      fontSize: 'lg',
      color: 'black',
    },
    title2: {
      fontWeigh: 'normal',
      fontSize: '2xl',
      color: 'black',
    },
    titleActivityInfo_New: {
      color: 'gray.600',
      fontSize: 'md',
      letterSpacing: 0.5,
      w: 230,
      fontWeight: 'semibold',
    },
    titleActivityInfo_Info: {
      color: 'black:alpha.70',
      fontSize: 'md',
      fontWeight: 'bold',
    },
    inBoxAction_waiting: {
      color: 'blue.700',
      fontSize: '6xl',
      fontWeight: 'semibold',
    },
    Recent: {
      color: 'black:alpha.70',
      fontSize: 'md',
      fontWeight: 'black',
      mb: 1,
    },
    gotIt: {
      color: 'lightBlue.700',
      fontSize: 'md',
      fontWeight: 'bold',
    },
    textRedirect: {
      color: 'gray.500',
      fontWeight: 'semibold',
      fontSize: 'md',
    },
    textInActionSheet: {
      color: 'black',
      fontWeight: 'bold',
    },
  };
  // color={'black:alpha.70'} fontSize={'md'} fontWeight={'black'}
  static readonly ButtonColor = {
    searchButton: '#323334',
    plusButton: '#3377C8',
    buttonNew: {
      color: 'white',
      fontWeight: 'bold',
      bg: 'red.700:alpha.90',
      rounded: 'full',
      px: '2',
    },
    buttonLogin: {
      size: 'sm',
      rounded: 'sm',
      bg: '#121232',
      px: 10,
    },
  };

  ///=================
}
export const Swiper: Type = {
  rowFront: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    height: 120,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
};
