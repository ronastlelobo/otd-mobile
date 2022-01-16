import React, { useMemo } from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { wp, hp } from '../Utils/PixelRatio';

export const Button = ({ label = 'Continue', onPress = () => {}, buttonStyle = {} }) => {
  const theme = useTheme();
  const style = useMemo(() => styles(theme), [theme]);
  return (
    <Pressable onPress={onPress} style={[style.button, buttonStyle]}>
      <Text style={style.buttonText}>{label}</Text>
    </Pressable>
  );
};

export default Button;

const styles = (theme) =>
  StyleSheet.create({
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
