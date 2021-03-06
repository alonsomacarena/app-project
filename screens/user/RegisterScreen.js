import { Alert, StyleSheet } from 'react-native';
import { FORM_INPUT_UPDATE, formReducer } from './formReducer';
import React, { useCallback, useReducer } from 'react';

import AuthScreenWrapper from '../../components/AuthScreenWrapper';
import { Button } from 'react-native-elements';
import COLORS from "../../constants/Colors";
import Input from '../../components/Input';
import { signup } from '../../store/actions/auth.action';
import { useDispatch } from 'react-redux';

//import { Button } from 'react-native-elements';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [formState, formDispatch] = useReducer(formReducer, {
    inputValues: {
      user: "",
      email: '',
      password: '', 
    },
    inputValidities: {
      user: false,
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const handleSignUp = () => {
    if (formState.formIsValid) {
      dispatch(signup(formState.inputValues.email, formState.inputValues.password, formState.inputValues.user));
    } else {
      Alert.alert(
        'Formulario inválido',
        'Ingresa email y usuario válido',
        [{ text: 'Ok' }]
      );
    }
  }

  const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
    formDispatch({
      type: FORM_INPUT_UPDATE,
      value: inputValue,
      isValid: inputValidity,
      input: inputIdentifier,
    });
  }, [formDispatch]);

  return (
    <AuthScreenWrapper
      title="REGISTRO"
      message="¿Ya tienes cuenta?"
      buttonText="INGRESAR"
      buttonPath="Login"
    >
      <Input id="user" label="Nombre"
        required
        minLength={4}
        onInputChange={onInputChangeHandler}/>
      <Input
        id="email"
        label="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        errorText="Por favor ingresa un email válido"
        required
        email
        onInputChange={onInputChangeHandler}
      />
      <Input
        id="password"
        label="Password"
        secureTextEntry
        autoCapitalize="none"
        errorText="La contraseña debe ser mínimo 6 caracteres"
        required
        minLength={6}
        onInputChange={onInputChangeHandler}
      />
      <Button
        title="REGISTRARME"
        onPress={handleSignUp}
        buttonStyle={styles.button}
      />
    </AuthScreenWrapper>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    marginVertical: 20,
  },
});

export default RegisterScreen;