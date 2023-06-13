import React from 'react';
import { StatusBar, ActivityIndicator, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import { useGetWeather } from './src/hooks/useGetWeather';
import ErrorItem from './src/components/ErrorItem';

const App = () => {
  StatusBar.setHidden(false);
  const [loading, error, weather] = useGetWeather();

  return weather && weather.list && !loading ? (
    <NavigationContainer>
      <Tabs weather={weather} />
    </NavigationContainer>
  ) : (
    <View style={styles.container}>
      {error ? <ErrorItem /> : <ActivityIndicator size={'large'} color={'blue'} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
