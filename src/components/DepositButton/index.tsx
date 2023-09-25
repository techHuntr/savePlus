// DepositButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import colors from '../../theme/colors';
import { depositMoney } from '../../store/bankslice/bankslice'; // Import your depositMoney action
import { useDispatch } from 'react-redux';

interface DepositButtonProps extends TouchableOpacityProps {
  onPress: () => void;
}

const DepositButton: React.FC<DepositButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Deposit</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.depositButtonBackground, // Button background color
    borderRadius: 10,
    flex: 1, // Make the button take up equal width
    margin: 6,
    height: 89,
    alignItems: 'center', // Center child elements vertically
    justifyContent: 'center', // Center child elements horizontally

  },
  buttonText: {
    color: colors.depositTextColor,
    fontWeight: '600',
    textAlign: 'center', // Center text horizontally within the button
    padding: 12,
    fontSize: 20
  },
});

export default DepositButton;
