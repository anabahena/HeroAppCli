import React from 'react';
import {Card, CardItem} from 'native-base';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

const CardComponent = ({item, navigation}) => {
  const {colors} = useTheme();

  return (
    <Card style={styles.card}>
      <CardItem
        button
        onPress={() => navigation.navigate('Detail', {data: item})}
        style={styles.cardItem}>
        <ImageBackground
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
          style={styles.image}
          source={{uri: item.images.lg}}>
          {/* eslint-disable-next-line react-native/no-inline-styles */}
          <View style={[{backgroundColor: '#00000080', padding: 5}]}>
            <Text style={[styles.category, {color: '#fff', fontSize: 12}]}>
              {item.appearance.race}
            </Text>
          </View>
        </ImageBackground>
      </CardItem>
      <CardItem
        style={{
          paddingLeft: 5,
          paddingRight: 5,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}>
        <Text style={styles.name}>{item.name}</Text>
      </CardItem>
    </Card>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  card: {
    width: screenWidth * 0.4,
    marginRight: 10,
    borderRadius: 10,
  },
  cardItem: {
    borderRadius: 10,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 5,
  },
  name: {
    fontWeight: '700',
    fontSize: 12,
  },
  category: {
    width: 'auto',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
});
