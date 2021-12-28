import React from 'react';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Button,
  Label,
} from 'native-base';
import {
  StatusBar,
  Text,
  useColorScheme,
  StyleSheet,
  ImageBackground,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';
import {LinearProgress} from 'react-native-elements';

const Details = ({navigation, route}) => {
  const {data} = route.params,
    {colors} = useTheme(),
    scheme = useColorScheme();

  return (
    <Container style={[styles.header, { backgroundColor: colors.background }]}>
      <Header style={[styles.header, {backgroundColor: colors.background}]}>
        <Left
          style={{
            flex: 0,
          }}>
          <Button
            transparent
            style={styles.search}
            onPress={() => navigation.navigate('Home')}>
            <Icon name="chevron-back-outline" size={30} color={colors.primary} />
          </Button>
        </Left>
        <Body
          style={{
            flex: 1,
          }}>
          <Text style={[styles.title, {color: colors.primary}]}>
            {data.name}
          </Text>
        </Body>
      </Header>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Content>
        <ImageBackground style={styles.image} source={{uri: data.images.lg}}>
          <View style={[{backgroundColor: colors.primary + 80, padding: 5}]}>
            <Text style={[styles.category, {color:colors.primary}]}>{data.appearance.race}</Text>
          </View>
        </ImageBackground>
        <View style={styles.container}>
          <Text style={[styles.type, {fontWeight: 'bold', color: colors.primary}]}>
            Place of birth:{' '}
            <Label style={[styles.label, {color: colors.primary}]}>{data.biography.placeOfBirth}</Label>
          </Text>

          <Text style={[styles.type, {color: colors.primary}]}>
            First appearance:
            <Label style={[styles.label, {color: colors.primary}]}>
              {' '}
              {data.biography.firstAppearance}
            </Label>
          </Text>

          <Text style={[styles.type, {color: colors.primary}]}>
            Occupation:
            <Label style={[styles.label, {color: colors.primary}]}> {data.work.occupation}</Label>
          </Text>

          <View style={styles.containerPowerstats}>
            <Text style={[styles.titlePower, {color: colors.primary}]}>Powerstats</Text>
            <Text style={[styles.powerstats, {color: colors.primary}]}>Combat</Text>
            <LinearProgress
              color={'#99CCCC'}
              style={{marginVertical: 10}}
              value={data.powerstats.combat / 100}
              variant="determinate"
            />

            <Text style={[styles.powerstats, {color: colors.primary}]}>Durability</Text>
            <LinearProgress
              color={'#99CCCC'}
              style={{marginVertical: 10}}
              value={data.powerstats.durability / 100}
              variant="determinate"
            />

            <Text style={[styles.powerstats, {color: colors.primary}]}>Intelligence</Text>
            <LinearProgress
              color={'#99CCCC'}
              style={{marginVertical: 10}}
              value={data.powerstats.intelligence / 100}
              variant="determinate"
            />

            <Text style={[styles.powerstats, {color: colors.primary}]}>Power</Text>
            <LinearProgress
              color={'#99CCCC'}
              style={{marginVertical: 10}}
              value={data.powerstats.power / 100}
              variant="determinate"
            />

            <Text style={[styles.powerstats, {color: colors.primary}]}>Speed</Text>
            <LinearProgress
              color={'#99CCCC'}
              style={{marginVertical: 10}}
              value={data.powerstats.speed / 100}
              variant="determinate"
            />

            <Text style={[styles.powerstats, {color: colors.primary}]}>Strength</Text>
            <LinearProgress
              color={'#99CCCC'}
              style={{marginVertical: 10}}
              value={data.powerstats.strength / 100}
              variant="determinate"
            />
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default Details;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    elevation: 0,
  },
  title: {
    //fontFamily: 'Roboto-Bold',
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  category: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    //fontFamily: 'Montserrat_Bold',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
  type: {
    color: '#000',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  powerstats: {
    fontSize: 12,
  },
  label: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'normal',
  },
  container: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
    flex: 1,
  },
  containerPowerstats: {
    borderColor: '#dedede',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  titlePower: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 10,
  },
});
