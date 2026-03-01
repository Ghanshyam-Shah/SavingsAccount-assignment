import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Buttons = ({ onPrev, onNext, prevLabel, nextLabel }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPrev}>
        <Text style={styles.buttonIcon}>{`<`}</Text>
        <Text style={styles.buttonText} numberOfLines={1} ellipsizeMode="tail">
          {prevLabel}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onNext}>
        <Text style={styles.buttonText} numberOfLines={1} ellipsizeMode="tail">
          {nextLabel}
        </Text>
        <Text style={styles.buttonIcon}>{`>`}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 25,
  },
  button: {
    width: 150,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#008c85',
    borderWidth: 2,
    borderRadius: 6,
  },
  buttonText: {
    color: '#008c85',
    fontWeight: '500',
    marginHorizontal: 5,
    maxWidth: 90,
  },
  buttonIcon: {
    color: '#008c85',
    fontSize: 18,
  },
});

export default Buttons;
