import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { TransactionHistoryContainer, TransactionItem, TransactionText, TransactionAmount, TransactionTextHeader, TransactionName } from '../../style'
import { transactionHistoryRepository } from '../../repositories/TransactionHistoryRepository';
import { Image, View, FlatList } from 'react-native';

const TransactionHistory = () => {
  const transactions = useSelector((state: RootState) => state.bank.transactions);

  // Define a renderItem function for FlatList
  const renderItem = ({ item }) => (
    <TransactionItem>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={item.amount > 0 ? require('../../theme/assets/images/deposit_money.png') : require('../../theme/assets/images/withdrwal_money.png')}
          style={{ width: 20, height: 20, marginRight: 8 }}
        />
        <View>
          <TransactionText>{item.remarks}</TransactionText>
          <TransactionName>Name: {item.name}</TransactionName>
        </View>
      </View>
      <TransactionAmount>{item.amount > 0 ? `+ $${item.amount}` : `- $${-item.amount}`}</TransactionAmount>
    </TransactionItem>
  );

  return (
    <TransactionHistoryContainer >
      <TransactionTextHeader>Transaction History</TransactionTextHeader>
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={{ height: 200 }} 
      />
    </TransactionHistoryContainer>
  );
};

export default TransactionHistory;
