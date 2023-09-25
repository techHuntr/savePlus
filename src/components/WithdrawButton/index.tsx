// WithdrawButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import colors from '../../theme/colors'; 

interface WithdrawButtonProps extends TouchableOpacityProps {
  onPress: () => void;
}

const WithdrawButton: React.FC<WithdrawButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Withdraw</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
      backgroundColor:  colors.withdrawButtonBackground,  // Button background color
      borderRadius: 10,
      flex: 1, // Make the button take up equal width
      margin: 6,
      height: 89, 
      alignItems: 'center', // Center child elements vertically
      justifyContent: 'center', // Center child elements horizontally  
    },
    buttonText: {
        color: colors.withdrawTextColor,
        fontWeight: '600',
        textAlign: 'center', // Center text horizontally within the button
        padding: 12,
        fontSize: 20
    },
  });

export default WithdrawButton;
