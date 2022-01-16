import React, { useMemo, useRef, useState } from 'react';
import { ScrollView, Text, View, Image, TextInput, Platform } from 'react-native';
import { styles } from './OTP.styles';
import { useTheme } from '@react-navigation/native';
import ImageLib from '../../Utils/ImageLib';
import Button from '../../Components/Button';

const OTP = ({ navigation }) => {
  const theme = useTheme();
  const style = useMemo(() => styles(theme), [theme]);
  const [otpArray, setOtpArray] = useState(['', '', '', '']);
  const firstTextInputRef = useRef();
  const secondTextInputRef = useRef();
  const thirdTextInputRef = useRef();
  const fourthTextInputRef = useRef();
  const isAndroid = Platform.OS === 'android';

  const onOtpKeyPress = (index) => {
    return ({ nativeEvent: { key: value } }) => {
      if (value === 'Backspace' && otpArray[index] === '') {
        if (index === 1) {
          firstTextInputRef.current.focus();
        } else if (index === 2) {
          secondTextInputRef.current.focus();
        } else if (index === 3) {
          thirdTextInputRef.current.focus();
        }

        if (isAndroid && index > 0) {
          const otpArrayCopy = otpArray.concat();
          otpArrayCopy[index - 1] = '';
          setOtpArray(otpArrayCopy);
        }
      }
    };
  };

  const onOtpChange = (index) => {
    return (value) => {
      if (isNaN(Number(value))) {
        return;
      }
      const otpArrayCopy = otpArray.concat();
      otpArrayCopy[index] = value;
      setOtpArray(otpArrayCopy);

      if (value !== '') {
        if (index === 0) {
          secondTextInputRef.current.focus();
        } else if (index === 1) {
          thirdTextInputRef.current.focus();
        } else if (index === 2) {
          fourthTextInputRef.current.focus();
        }
      }
    };
  };

  const refCallback = (textInputRef) => (node) => {
    textInputRef.current = node;
  };

  return (
    <View style={style.container}>
      <ScrollView>
        <View style={style.backButtonContainer}>
          <View style={style.backButton}>
            <Image source={ImageLib.Back} style={style.imageStyle} />
          </View>
        </View>
        <View style={style.timeContainer}>
          <Text style={style.timerText}>00:42</Text>
          <Text style={style.timerDesc}>Type the verification code we’ve sent you</Text>
        </View>
        <View style={style.otpContainer}>
          {[firstTextInputRef, secondTextInputRef, thirdTextInputRef, fourthTextInputRef].map((textInputRef, index) => (
            <TextInput
              value={otpArray[index]}
              onKeyPress={onOtpKeyPress(index)}
              onChangeText={onOtpChange(index)}
              keyboardType={'numeric'}
              maxLength={1}
              style={[style.otpTextInput, otpArray[index] && { backgroundColor: '#E94057' }]}
              textAlign="center"
              autoFocus={index === 0 ? true : undefined}
              ref={refCallback(textInputRef)}
              key={index}
              placeholder="0"
            />
          ))}
        </View>
        <View style={style.resetOtpContainer}>
          <Text style={style.resedOtpText}>Resend OTP</Text>
        </View>
        <View style={style.continueButtonContainer}>
          <Button
            onPress={() => {
              navigation.navigate('ProfileStackNavigator', {
                screen: 'Profile',
              });
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default OTP;
