import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  appBar: {
    zIndex: 99,
    alignItems: 'center',
    width: '100%',
    paddingRight: '2%',
    paddingLeft: '2%',
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#3700B3',
  },
  container: {
    height: 'auto',
    padding: 24,
    justifyContent: 'space-around',
  },
  flex: {
    flex: 1,
  },
  linearGradient: {
    paddingLeft: 1,
    paddingRight: 1,
    borderRadius: 5,
  },
  card: {
    backgroundColor: 'rgb(69,56,74)',
    borderRadius: 30,
  },
  cardHeader: {
    backgroundColor: 'rgb(87,77,102)',
    padding: 8,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRadius: 0,
  },
  button: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    backgroundColor: '#464356',
  },
  cardList: {
    backgroundColor: '#464356',
    width: '100%',
    padding: 10,
    marginBottom: 5,
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 8,
  },
  footer: {
    flex: 1,
  },
});
