import React, { useMemo } from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { styles } from './Login.styles';
import ImageLib from '../../Utils/ImageLib';
import { useTheme } from '@react-navigation/native';

const Login = ({ navigation }) => {
  const theme = useTheme();
  const style = useMemo(() => styles(theme), [theme]);
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image source={ImageLib.Logo} resizeMode="center" />
      </View>
      <View style={style.loginContainer}>
        <View style={style.loginButton}>
          <View style={style.loginImageContainer}>
            <Image source={ImageLib.Google} resizeMode="center" />
          </View>
          <Text style={style.loginText}>LOG IN WITH GOOGLE</Text>
        </View>
        <View style={style.loginButton}>
          <View style={style.loginImageContainer}>
            <Image source={ImageLib.Facebook} resizeMode="center" />
          </View>
          <Text style={style.loginText}>LOG IN WITH FACEBOOK</Text>
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate('MobileNumber');
          }}
          style={style.loginButton}
        >
          <View style={style.loginImageContainer}>
            <Image
              source={ImageLib.Phone}
              tintColor={theme.colors.secondary}
              style={{ tintColor: theme.colors.secondary }}
              resizeMode="center"
            />
          </View>
          <Text style={style.loginText}>LOG IN WITH PHONE NUMBER</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
