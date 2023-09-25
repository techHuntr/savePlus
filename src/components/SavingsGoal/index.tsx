import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import {
  GoalContainer,
  GoalInput,
  GoalText,
  ProgressText,
  GoalValue,
  ProgressDescreption,
} from '../../style';
import { savingsGoalRepository } from '../../repositories/SavingsGoalRepository';
import { View, TouchableOpacity, Text, Modal, TextInput, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import colors from '../../theme/colors';

// Create a function to calculate and format the progress
const calculateFormattedProgress = (goalAmount, balance) => {
  const progress = ((balance / goalAmount) * 100).toFixed(2);
  return progress;
};

const SavingsGoal = () => {
  const balance = useSelector((state: RootState) => state.bank.balance);
  const dispatch = useDispatch();

  const [goal, setGoal] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const goalAmount = parseFloat(goal);
  const formattedProgress = calculateFormattedProgress(goalAmount, balance);

  // Function to calculate the savings goal based on the desired balance and added amount
  const calculateSavingsGoal = (desiredBalance: number, addedAmount: number) => {
    return (desiredBalance / (addedAmount / 100)) * 100;
  };

  const desiredBankBalance = 1000; // Desired bank balance after adding an amount
  const addedAmount = 10.1; // Amount you want to add

  const calculatedSavingsGoal = calculateSavingsGoal(desiredBankBalance, addedAmount);

  const handleSetGoal = () => {
    setIsModalVisible(true);
  };

  const handleConfirmGoal = () => {
    setGoal(parseFloat(goal));
    setIsModalVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <GoalContainer style={{ flex: 1 }}>
        <GoalText>Goal</GoalText>
        <GoalValue>${goal}</GoalValue>
        {goalAmount > 0 && (
          <View style={{ alignItems: 'center' }}>
            <AnimatedCircularProgress
              size={120}
              width={15}
              fill={formattedProgress}
              tintColor={formattedProgress < 50 ? colors.withdrawTextColor : colors.depositTextColor}
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor="#3d5875"
            />
            <View style={[styles.progressWrapper, { backgroundColor: formattedProgress < 50 ? colors.withdrawButtonBackground : colors.depositButtonBackground }]}>
              <ProgressText style={[styles.progressText, { color: formattedProgress < 50 ? colors.withdrawTextColor : colors.depositTextColor }]}>
                Progress: {formattedProgress}%
              </ProgressText>
            </View>
          </View>
        )}
        <ProgressDescreption>
          {goalAmount - balance > 0 ? 'You need to save $'+ (goalAmount - balance) + ' to reach your saving goal' : goalAmount - balance <= 0 ? 'You have reached your goal' : ''}
        </ProgressDescreption>
      </GoalContainer>
      <View style={{ padding: 16, backgroundColor: 'white' }}>
        <TouchableOpacity style={styles.button} onPress={handleSetGoal}>
          <Text style={styles.buttonText}>Set Goal</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for entering goal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              placeholder="Enter Goal Amount"
              keyboardType="numeric"
              value={goal}
              onChangeText={(text) => setGoal(text)}
              style={styles.input}
            />
            <View>
              <TouchableOpacity onPress={handleConfirmGoal} style={styles.confirmButton}>
                <Text style={styles.confirmButtonText}>Set Goal</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsModalVisible(false)} style={styles.cancelButton}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... your existing styles ...

  button: {
    backgroundColor: '#456EFE',
    padding: 16,
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  progressText: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.depositTextColor, // You can specify the text color as needed
  },

  progressWrapper: {
    backgroundColor: colors.depositButtonBackground,
    padding: 10, // Adjust padding as needed
    borderRadius: 8, // Adjust the border radius as needed
    marginTop: 24, // Adjust margin as needed
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },

  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    fontSize: 18,
    padding: 8,
  },
  confirmButton: {
    backgroundColor: '#456EFE',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cancelButton: {
    marginTop: 16,
    backgroundColor: '#f1f2f3',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: 'gray',
    fontWeight: 'bold',
  },
});

export default SavingsGoal;
