import { StyleSheet } from 'react-native';

export const styles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    imageContainer: { flex: 0.6, justifyContent: 'center', alignItems: 'center', width: '100%' },
    loginContainer: {
      flex: 0.4,
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    loginButton: {
      width: '95%',
      flex: 0.2,
      backgroundColor: theme.colors.white,
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderRadius: 8,
      borderColor: theme.colors.primaryGrey,
      borderWidth: 1,
      flexDirection: 'row',
      paddingHorizontal: 10,
    },
    loginImageContainer: {
      width: '20%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginText: {
      fontFamily: theme.fonts.Bold,
      fontSize: 18,
      color: theme.colors.secondary,
    },
  });
