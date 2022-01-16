import React, { useMemo, useState } from 'react';
import { Text, View, Pressable, ScrollView, TextInput } from 'react-native';
import { styles } from './MobileNumber.styles';
import { useTheme } from '@react-navigation/native';
import CountryPicker from 'react-native-country-picker-modal';
import Button from '../../Components/Button';

const MobileNumber = ({ navigation }) => {
  const theme = useTheme();
  const style = useMemo(() => styles(theme), [theme]);
  const [countryCode, setCountryCode] = useState('IN');
  const [country, setCountry] = useState({ callingCode: ['+91'] });
  const [openCountryPicker, setCountryPicker] = useState(false);

  const onSelect = (country) => {
    setCountryCode(country.cca2);
    setCountry(country);
    setCountryPicker(false);
  };
  return (
    <View style={style.container}>
      <ScrollView>
        <View style={style.mobileNumber}>
          <Text style={style.headerText}>My mobile</Text>
          <Text style={style.headerDesText}>
            Please enter your valid phone number. We will send you a 4-digit code to verify your account.{' '}
          </Text>
        </View>
        <View style={style.mobileNumberContainer}>
          <View style={style.mobileNumberTextInputContainer}>
            <Pressable
              onPress={() => {
                setCountryPicker(true);
              }}
              style={style.countryContainer}
            >
              <CountryPicker
                countryCode={countryCode}
                withFlagButton={true}
                withCallingCode={true}
                withFilter={true}
                onSelect={onSelect}
                visible={openCountryPicker}
                onClose={() => {
                  setCountryPicker(false);
                }}
              />
              <Text style={style.countryCallingCodeText}>({country.callingCode[0]})</Text>
            </Pressable>
            <View style={style.divider} />
            <TextInput
              style={style.textInput}
              placeholder="Mobile Number"
              placeholderTextColor={theme.colors.primaryGrey}
              keyboardType={'number-pad'}
            />
          </View>
        </View>
        <View style={style.submitContainer}>
          <Button
            onPress={() => {
              navigation.navigate('OTP');
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default MobileNumber;
