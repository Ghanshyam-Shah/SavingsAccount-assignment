import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { fetchAccounts } from '../api/accountsApi';
import AccountTable from '../components/AccountTable';
import Buttons from '../components/Buttons';

const HomeScreen = () => {
  const [accounts, setAccounts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAccounts();
  }, []);

  const loadAccounts = async () => {
    try {
      const data = await fetchAccounts();
      setAccounts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const goNext = () => {
    if (accounts.length === 0) return;

    if (currentIndex === accounts.length - 1) {
      setCurrentIndex(0); // last se first
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrev = () => {
    if (accounts.length === 0) return;

    if (currentIndex === 0) {
      setCurrentIndex(accounts.length - 1); // first se last
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const currentAccount = accounts[currentIndex];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Savings Accounts</Text>
      </View>

      {currentAccount && <AccountTable account={currentAccount} />}

      <Buttons
        onPrev={goPrev}
        onNext={goNext}
        prevLabel={
          accounts[currentIndex === 0 ? accounts.length - 1 : currentIndex - 1]
            ?.product
        }
        nextLabel={
          accounts[currentIndex === accounts.length - 1 ? 0 : currentIndex + 1]
            ?.product
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  headingContainer: {
    backgroundColor: '#008c85',
    width: '100%',
    paddingTop: 20,
  },
  heading: {
    color: 'white',
    fontSize: 40,
    marginVertical: 20,
    width: '60%',
    textAlign: 'left',
    paddingLeft: 20,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
