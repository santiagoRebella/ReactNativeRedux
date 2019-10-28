import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (data) => {
  try {
    await AsyncStorage.setItem('@state', data);
  } catch (e) {
    console.log('writing to storage error', e);
  }
};

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@state');
    if (value !== null) {
      return value;
    }
    return false;
  } catch (e) {
    console.log('reading storage error', e);
  }
};
