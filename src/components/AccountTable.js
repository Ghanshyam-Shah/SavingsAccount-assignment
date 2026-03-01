import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const AccountTable = ({ account }) => {
  return (
    <View style={styles.tableContainer}>
      {/* Product wali Row (Heading) */}
      <View style={[styles.row, styles.productRow]}>
        <Text style={styles.productText}>{account.product}</Text>
      </View>

      {/* Interest */}
      <View style={styles.row}>
        <Text style={styles.label}>Interest rate: {account.interest}%</Text>
      </View>

      {/* Minimum */}
      <View style={styles.row}>
        <Text style={styles.label}>Minimum deposit: ${account.minimum}</Text>
      </View>

      {/* Type */}
      <View style={[styles.row, styles.lastRow]}>
        <Text style={styles.label}>Interest type: {account.type}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    width: width * 0.9,
    borderWidth: 1,
    borderColor: '#008c85',
    backgroundColor: '#fff',
    marginTop: 20,
  },
  row: {
    padding: 15,
    borderBottomWidth: 1,
    // backgroundColor: 'e4efee'
    borderColor: '#008c85',
    alignItems: 'center',
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  productRow: {
    backgroundColor: '#fbfbf6',
  },
  productText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  label: {
    fontWeight: '500',
    marginBottom: 4,
  },
});

export default AccountTable;
