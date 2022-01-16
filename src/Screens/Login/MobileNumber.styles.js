import { wp, hp } from '../../Utils/PixelRatio';
import { StyleSheet } from 'react-native';

export const styles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    mobileNumber: {
      height: hp('25%'),
      width: '100%',
      justifyContent: 'flex-end',
      paddingHorizontal: 25,
    },
    headerText: {
      fontFamily: theme.fonts.Bold,
      fontSize: hp(4.1),
    },
    headerDesText: {
      marginTop: 10,
      fontFamily: theme.fonts.Regular,
      fontSize: hp(1.7),
    },
    mobileNumberContainer: {
      height: hp('15%'),
      justifyContent: 'center',
      alignItems: 'center',
    },
    mobileNumberTextInputContainer: {
      height: '50%',
      borderWidth: 1,
      width: '90%',
      borderRadius: 8,
      alignItems: 'center',
      paddingHorizontal: 10,
      borderColor: theme.colors.primaryGrey,
      flexDirection: 'row',
    },
    countryContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '20%',
    },
    countryCallingCodeText: {
      fontFamily: theme.fonts.Regular,
      fontSize: hp(1.7),
      borderRightColor: 'red',
    },
    divider: {
      paddingHorizontal: 5,
      marginHorizontal: 10,
      height: '35%',
      borderRightWidth: 1,
      borderRightColor: theme.colors.primaryGrey,
    },
    textInput: {
      width: '75%',
      fontSize: hp(1.7),
      fontFamily: theme.fonts.Regular,
    },
    submitContainer: {
      height: hp('20%'),
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    button: {
      width: wp('90%'),
      height: hp('7%'),
      backgroundColor: theme.colors.secondary,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
    },
    buttonText: {
      fontFamily: theme.fonts.Bold,
      fontSize: hp(1.8),
      color: theme.colors.white,
    },
  });
