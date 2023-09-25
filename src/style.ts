// src/styles.ts
import styled from 'styled-components/native';
import colors from './theme/colors';

// ...

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.View`
  width: 80%;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  elevation: 5;
`;

export const ModalHeader = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
`;

export const ModalButton = styled.TouchableOpacity`
  background-color: #007AFF;
  padding: 12px;
  border-radius: 8px;
  align-items: center;
  margin-top: 16px;
`;

export const ModalButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const InputField = styled.TextInput`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 16px;
  border-radius: 8px;
  font-size: 16px;
`;

export const GoalContainer = styled.View`
  flex: 1; 
  padding: 16px;
  background-color: #fcfcfc;
`;

export const GoalInput = styled.TextInput`
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 8px;
  border-radius: 8px;
  font-size: 16px;
`;

export const GoalText = styled.Text`
  font-size: 16px;
  margin: 8px 0;
  text-align: center; /* Center align the text */
  font-weight: bold; /* Make the text bold */
  color: gray; 
`;
export const GoalValue = styled.Text`
  font-size: 24px;
  margin: 0px 0;
  margin-bottom: 14px;
  text-align: center; /* Center align the text */
  font-weight: bold; /* Make the text bold */
  color: black; 
`;

export const ProgressText = styled.Text`
  font-size: 18px;
  color: #007AFF;
`;

export const ProgressDescreption = styled.Text`
  font-size: 18px;
  color: #A4A9AE;
  text-align: center;
  margin-top: 40px;
`;

export const TransactionHistoryContainer = styled.View`
  margin: 5px;
`;

export const TransactionItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
  background-color: #fff;
  padding: 12px;
  border-radius: 8px;
  elevation: 2;
`;

export const TransactionText = styled.Text`
  font-size: 16px;
  margin-bottom: 1px;
  margin-left: 10px;
  text-align: left;
  align-items: center;
`;

export const TransactionName = styled.Text`
  font-size: 10px;
  margin-bottom: 1px;
  margin-left: 10px;
  text-align: left;
  align-items: center;
`;

export const TransactionTextHeader = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
  margin-left: 0px;
  text-align: left;
  align-items: center;
`;

export const TransactionAmount = styled.Text`
  font-size: 16px;
  color: #007AFF;
`;

export const BalanceText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 16px;
`;

export const FontFamily = {
  sofiaPro: 'Sofia Pro',
};

// Font sizes
export const FontSize = {
  size_lgi: '19px',
  size_lg: '18px',
  size_xs: '12px',
  size_sm: '14px',
  size_3xl: '22px',
  size_9xl: '28px',
  size_smi: '13px',
  size_xl: '20px',
  size_base: '16px',
  size_4xs: '9px',
};

// Colors
export const Color = {
  colorWhite: '#fff',
  colorDarkgray_100: '#a4a9ae',
  colorDarkgray_200: 'rgba(164, 169, 174, 0.15)',
  colorMediumslateblue: '#456efe',
  colorGray_100: '#8e949a',
  colorGray_200: '#202a34',
  colorDarkslategray: '#23303b',
  colorLightsteelblue: '#b4b2c8',
};

// Border radiuses
export const Border = {
  br_31xl: '50px',
  br_3xs: '10px',
};

// Styled Components
export const StyledText = styled.Text`
    font-family: ${FontFamily.sofiaPro};
  `;

export const StyledContainer = styled.View`
    flex: 1;
    background-color: ${Color.colorWhite};
  `;

export const StyledImage = styled.Image`
    width: 100%;
    height: auto;
    aspect-ratio: 1;
  `;
