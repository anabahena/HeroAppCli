import React, {useContext, useState} from 'react';
import {Content, Container, Header, Left, Body, Button} from 'native-base';
import {
  FlatList,
  StatusBar,
  Text,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import Card from '../../components/Card';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Context from '../../components/App/Context';

const Home = ({navigation}) => {
  const {data, setData} = useContext(Context),
    {colors} = useTheme(),
    scheme = useColorScheme(),
    [callMomentum, setCallMomentum] = useState(false);

  const renderItem = ({item}) => {
    return <Card item={item} navigation={navigation} />;
  };

  const humans = data && data.filter(item => item.appearance.race === 'Human'),
    cosmicEntity =
      data && data.filter(item => item.appearance.race === 'Cosmic Entity'),
    humanRadiation =
      data && data.filter(item => item.appearance.race === 'Human / Radiation'),
    others = data && data.filter(item => item.appearance.race === null),
    cyborg = data && data.filter(item => item.appearance.race === 'Cyborg'),
    android = data && data.filter(item => item.appearance.race === 'Android'),
    mutant = data && data.filter(item => item.appearance.race === 'Mutant');


  return (
    <Container style={{backgroundColor: colors.background}}>
      <Header style={[styles.header, {backgroundColor: colors.background}]}>
        <Body
          style={{
            flex: 1,
          }}>
          <Text style={[styles.title, {color: colors.primary}]}>HeroApp</Text>
        </Body>
        <Left style={{flex: 0}}>
          <Button
            transparent
            style={styles.search}
            onPress={() => navigation.navigate('Search')}>
            <Icon name="search" size={20} color={colors.primary} />
          </Button>
        </Left>
      </Header>
      <StatusBar
        backgroundColor={colors.secondary}
        barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Content>
        <Text style={[styles.heading, {color: colors.primary}]}>Humanos</Text>
        <FlatList
          data={humans}
          renderItem={renderItem}
          style={{width: '95%', marginLeft: 10, alignSelf: 'center'}}
          keyExtractor={item => item.id}
          horizontal={true}
          initialNumToRender={5}
          maxToRenderPerBatch={3}
          removeClippedSubviews={true}
          windowSize={5}
          updateCellsBatchingPeriod={100}
          onEndReachedThreshold={10}
        />
        <Text style={[styles.heading, {color: colors.primary}]}>
          Entidad cósmica
        </Text>
        <FlatList
          data={cosmicEntity}
          renderItem={renderItem}
          style={{width: '95%', marginLeft: 10, alignSelf: 'center'}}
          keyExtractor={item => item.id}
          horizontal={true}
          initialNumToRender={5}
          maxToRenderPerBatch={3}
          removeClippedSubviews={true}
          windowSize={5}
          updateCellsBatchingPeriod={100}
          onEndReachedThreshold={10}
        />
        <Text style={[styles.heading, {color: colors.primary}]}>
          Humano / Radiación
        </Text>
        <FlatList
          data={humanRadiation}
          renderItem={renderItem}
          style={{width: '95%', marginLeft: 10, alignSelf: 'center'}}
          keyExtractor={item => item.id}
          horizontal={true}
          initialNumToRender={5}
          maxToRenderPerBatch={3}
          removeClippedSubviews={true}
          windowSize={5}
          updateCellsBatchingPeriod={100}
          onEndReachedThreshold={10}
        />
        <Text style={[styles.heading, {color: colors.primary}]}>Cyborg</Text>
        <FlatList
          data={cyborg}
          renderItem={renderItem}
          style={{width: '95%', marginLeft: 10, alignSelf: 'center'}}
          keyExtractor={item => item.id}
          horizontal={true}
          initialNumToRender={5}
          maxToRenderPerBatch={3}
          removeClippedSubviews={true}
          windowSize={5}
          updateCellsBatchingPeriod={100}
          onEndReachedThreshold={10}
        />
        <Text style={[styles.heading, {color: colors.primary}]}>Mutantes</Text>
        <FlatList
          data={mutant}
          renderItem={renderItem}
          style={{width: '95%', marginLeft: 10, alignSelf: 'center'}}
          keyExtractor={item => item.id}
          horizontal={true}
          initialNumToRender={5}
          maxToRenderPerBatch={3}
          removeClippedSubviews={true}
          windowSize={5}
          updateCellsBatchingPeriod={100}
          onEndReachedThreshold={10}
        />
        <Text style={[styles.heading, {color: colors.primary}]}>Androides</Text>
        <FlatList
          data={android}
          renderItem={renderItem}
          style={{width: '95%', marginLeft: 10, alignSelf: 'center'}}
          keyExtractor={item => item.id}
          horizontal={true}
          initialNumToRender={5}
          maxToRenderPerBatch={3}
          removeClippedSubviews={true}
          windowSize={5}
          updateCellsBatchingPeriod={100}
          onEndReachedThreshold={10}
        />
        <Text style={[styles.heading, {color: colors.primary}]}>Otros</Text>
        <FlatList
          data={others}
          renderItem={renderItem}
          style={{width: '95%', marginLeft: 10, alignSelf: 'center'}}
          keyExtractor={item => item.id}
          horizontal={true}
          initialNumToRender={5}
          maxToRenderPerBatch={3}
          removeClippedSubviews={true}
          windowSize={5}
          updateCellsBatchingPeriod={100}
          onEndReachedThreshold={10}
        />
      </Content>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    elevation: 0,
  },
  title: {
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
    width: '95%',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  search: {
    padding: 10,
  },
});
