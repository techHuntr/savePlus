// src/components/AccountBalance.tsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { View, Text, StyleSheet } from 'react-native';
import DepositButton from '../DepositButton';
import WithdrawButton from '../WithdrawButton';
import colors from '../../theme/colors';
import TransactionHistory from '../TransactionHistory';
import { useDispatch } from 'react-redux';
import { depositMoney, withdrawMoney } from '../../store/bankslice/bankslice';
import DepositPopup from '../PopUpModal'; // Import the DepositPopup component from its file


const AccountBalance = () => {
  
  const balance = useSelector((state: RootState) => state.bank.balance);
  const accountHolderName = 'John Doe';
  const dispatch = useDispatch();

  const [isDepositPopupVisible, setDepositPopupVisible] = useState(false);
  const [actionType, setActionType] = useState('');

  const [amount, setAmount] = useState('');
  const [remarks, setRemarks] = useState('');
  const [name, setName] = useState('');

  const handleDeposit = () => {
    setActionType('deposit');
    setDepositPopupVisible(true);
  };

  const handleWithdraw = () => {
    setActionType('withdraw');
    setDepositPopupVisible(true);
  };

  const handleConfirmAction = (amount: number, remarks: string, actionType: string, name: string) => {
    if (actionType === 'deposit') {
      dispatch(depositMoney({ amount, remarks, name }));
    } else if (actionType === 'withdraw') {
      dispatch(withdrawMoney({ amount, remarks, name }));
    }

    setDepositPopupVisible(false);
    setAmount('');
    setRemarks('');
    setName('');
    setActionType('');
  };

  const handleCancelAction = () => {
    setDepositPopupVisible(false);
    setAmount('');
    setRemarks('');
    setName('');
    setActionType('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardHeaderText}>{accountHolderName}</Text>
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.balanceText}></Text>
          <Text style={styles.balanceText}></Text>
          <Text style={styles.accountHolderName}>Account Balance</Text>
          <Text style={styles.balanceAmount}>${balance.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <DepositButton onPress={handleDeposit} />
        <WithdrawButton onPress={handleWithdraw} />
      </View>
      <View style={styles.transactionHistoryContainer}>
        <TransactionHistory />
      </View>
      <DepositPopup
        visible={isDepositPopupVisible}
        onConfirm={handleConfirmAction}
        onCancel={handleCancelAction}
        actionType={actionType}
        amount={amount}
        remarks={remarks}
        name={name}
        setAmount={setAmount}
        setRemarks={setRemarks}
        setName={setName}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // marginTop: 16,
    backgroundColor: colors.background,
  },
  cardContainer: {
    backgroundColor: colors.cardBackground, // Background color of the card
    borderRadius: 15,
    padding: 16,
    marginHorizontal: 5
  },
  cardHeader: {
    marginBottom: 16,
  },
  cardHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white', // Text color for the header
  },
  cardBody: {},
  accountHolderName: {
    fontSize: 16,
    color: 'white', // Text color for the account holder's name
  },
  balanceText: {
    fontSize: 18,
    color: 'white', // Text color for the "Balance:" label
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Text color for the balance amount
  },
  buttonContainer: {
    flexDirection: 'row', // Display buttons in a row
    justifyContent: 'space-between', // Space buttons evenly within the container
    marginTop: 16, // Add top margin to separate buttons from the card content
  },
  transactionHistoryContainer: {
    marginTop: 16,
  },
});

export default AccountBalance;
