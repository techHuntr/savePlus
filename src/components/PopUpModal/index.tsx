import React from 'react';
import { View, Modal, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const DepositPopup = ({ visible, onConfirm, onCancel, actionType, amount, remarks, setAmount, setRemarks, setName, name }) => {
    const handleConfirm = () => {
        if(parseFloat(amount) == 0 ) return;
        try {
            // Validate the input (e.g., check if amount is a valid number)
            if (!isNaN(parseFloat(amount)) && remarks.trim() !== '') {
                onConfirm(parseFloat(amount), remarks, actionType, name);
            }
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onCancel}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <TextInput
                        placeholder="Enter Amount"
                        keyboardType="numeric"
                        value={amount}
                        onChangeText={(text) => setAmount(text)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Enter Remarks"
                        value={remarks}
                        onChangeText={(text) => setRemarks(text)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Enter Name"
                        value={name}
                        onChangeText={(text) => setName(text)}
                        style={styles.input}
                    />
                    <TouchableOpacity onPress={handleConfirm} style={[styles.button, styles.confirmButton]}>
                        <Text style={styles.buttonText}>
                            {actionType === 'deposit' ? 'Deposit' : 'Withdraw'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onCancel} style={[styles.button, styles.cancelButton]}>
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 26,
        alignItems: 'center',
    },
    input: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'gray',
        marginVertical: 8,
        padding: 8,
    },
    button: {
        width: '100%', // Set buttons to full width
        borderRadius: 5,
        marginVertical: 8,
        padding: 12,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    confirmButton: {
        backgroundColor: '#456EFE',
        borderRadius: 8,

    },
    cancelButtonText: {
        color: 'gray',
        fontWeight: 'bold',
    },
    cancelButton: {
        backgroundColor: '#f1f2f3',
        borderRadius: 8,

    },
});

export default DepositPopup;
