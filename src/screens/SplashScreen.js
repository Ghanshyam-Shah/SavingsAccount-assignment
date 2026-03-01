import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#008c85" barStyle="light-content" />
      <Text style={styles.title}>Accounts App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008c85',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    // fontWeight: 'bold',
  },
});

export default SplashScreen;
