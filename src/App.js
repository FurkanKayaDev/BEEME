import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  Image,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCharacters} from './redux/characterSlice/characterSlice';
import characters from './components/characters';
import styles from './app.styles';

const App = () => {
  const [refreshing, setRefreshing] = useState(false);
  const character = useSelector(state => state.characters.character);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(fetchCharacters()).then(() => {
      setRefreshing(false);
    });
  };
  return (
    <View style={{backgroundColor: '#999999', flex: 2}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.image}>
            <Image
              source={require('./assets/Arrow-icon.png')}
              style={{
                justifyContent: 'flex-start',
              }}
            />
          </View>
          <View style={styles.header_text}>
            <Text style={{fontSize: 18}}>Sıralama</Text>
          </View>
        </View>
        <FlatList
          contentContainerStyle={{paddingBottom: 20, marginTop: 10}}
          data={character}
          renderItem={(item, index) => characters(item, index)}
          keyExtractor={item => item.login.uuid}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => onRefresh()}
            />
          }
          ListFooterComponent={() => (
            <TouchableOpacity
              style={styles.btn}
              onPress={() => dispatch(fetchCharacters())}>
              <Text style={styles.load}>Load More</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default App;
