import { wp, hp } from '../../Utils/PixelRatio';
import { StyleSheet } from 'react-native';

export const styles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    backButtonContainer: {
      width: '100%',
      height: hp('15%'),
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingHorizontal: 25,
    },
    backButton: {
      width: wp('12%'),
      height: hp('6%'),
      borderWidth: 1,
      borderColor: theme.colors.primaryGrey,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageStyle: {
      tintColor: theme.colors.secondary,
    },
    timeContainer: {
      width: '100%',
      height: hp('10%'),
      justifyContent: 'center',
      alignItems: 'center',
    },
    timerText: {
      fontFamily: theme.fonts.Bold,
      fontSize: hp(4),
    },
    timerDesc: {
      marginTop: 10,
      fontFamily: theme.fonts.Regular,
      fontSize: hp(1.7),
    },
    otpContainer: {
      height: hp('15%'),
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    otpTextInput: {
      height: '50%',
      width: '18%',
      borderWidth: 1,
      borderRadius: 10,
      fontSize: 34,
      borderColor: theme.colors.secondary,
      color: theme.colors.white,
      fontFamily: theme.fonts.Bold,
    },
    continueButtonContainer: {
      height: hp('20%'),
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    resetOtpContainer: {
      height: hp('2%'),
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    resedOtpText: {
      fontSize: hp(1.7),
      fontFamily: theme.fonts.Bold,
      color: theme.colors.secondary,
    },
  });
