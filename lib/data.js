import AsyncStorage from '@react-native-async-storage/async-storage';

const setDataLocal = async (data) => {
  const prev = await AsyncStorage.getItem('data');
  if (prev) return JSON.parse(prev);
  const value = JSON.stringify(data);
  await AsyncStorage.setItem('data', value);
  return JSON.parse(value);
};

export {setDataLocal};
