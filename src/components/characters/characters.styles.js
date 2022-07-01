import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 5,
  },
  card: {
    borderRadius: 10,
    padding: 10,
    paddingVertical: 25,
    borderRadius: 20,
    marginHorizontal: 30,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 100,
    borderWidth: 2,
    resizeMode: 'contain',
  },
  image_container: {
    marginHorizontal: 15,
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderWidth: 3,
    borderRadius: 100,
  },
  nameText: {
    color: 'black',
  },
  secondText: {
    color: 'gray',
  },

  index: {
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 0.4,
    height: 30,
    borderColor: 'transparent',
  },
  name: {
    flex: 1.7,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default styles;
