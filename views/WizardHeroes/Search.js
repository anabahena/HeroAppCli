import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useState,
  useRef,
} from 'react';
import {Header, Left, Button, Body, Item, Input} from 'native-base';
import {
  Text,
  useColorScheme,
  StyleSheet,
  FlatList,
  StatusBar,
  Keyboard,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import methods from '../methods';
import Card from '../../components/Card';
import Context from '../../components/App/Context';
import Icon from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Search = ({route, navigation}) => {
  const [query, setQuery] = useState(''),
    [loading, setLoading] = useState(false),
    {data} = useContext(Context),
    [heroes, setHeroes] = useState(
      heroes ? heroes : data.length > 0 ? data : [],
    ),
    scheme = useColorScheme(),
    {colors} = useTheme();

  const getHeroes = useCallback(() => {
    const request = async () => {
      setLoading(true);
      return await methods.getHeroes.create();
    };
    request()
      .then(data => {
        setHeroes(data);
      })
      .catch(error => {});
  }, []);

  useEffect(() => {
    getHeroes();
  }, []);

  const filter = query => {
    const newData = heroes.filter(item => {
      const itemData = item.name.toUpperCase();
      const textData = query.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setHeroes(newData);
  };

  useEffect(() => {
    filter(query);
    if (!query) {
      getHeroes();
    }
  }, [query]);

  const renderItem = ({item}) => {
    return <Card item={item} navigation={navigation} />;
  };

  return (
    <Fragment>
      <Header style={[styles.header, {backgroundColor: colors.background}]}>
        <Left
          style={{
            flex: 0,
          }}>
          <Button
            transparent
            style={styles.search}
            onPress={() => navigation.navigate('Home')}>
            <Icon
              name="chevron-back-outline"
              size={30}
              color={colors.primary}
            />
          </Button>
        </Left>
        <Body
          style={{
            flex: 1,
          }}>
          <Text style={[styles.title, {color: colors.primary}]}>Búsqueda</Text>
        </Body>
      </Header>
      <StatusBar
        backgroundColor={colors.secondary}
        barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <KeyboardAwareScrollView
        onKeyboardWillShow={(frames: Object) => {
          console.log('Keyboard event', frames)
        }}>
        <Item
          style={[
            styles.item,
            {
              borderColor: colors.primary,
            },
          ]}>
          <Input
            onFocus={(event: Event) => {
              // `bind` the function if you're using ES6 classes
            }}
            placeholder={'Search hero'}
            value={query}
            onChangeText={text => setQuery(text)}
          />
        </Item>
      </KeyboardAwareScrollView>
      <FlatList
        data={heroes}
        renderItem={renderItem}
        style={{width: '95%', marginLeft: 10, alignSelf: 'center'}}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{flexWrap: 'wrap', justifyContent: 'space-between'}}
        initialNumToRender={5}
        maxToRenderPerBatch={3}
        removeClippedSubviews={true}
        windowSize={5}
        updateCellsBatchingPeriod={100}
        onEndReachedThreshold={10}
      />
    </Fragment>
  );
};

export default Search;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    elevation: 0,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
  },
  item: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
});
