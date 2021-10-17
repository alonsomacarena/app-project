import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import COLORS from '../constants/Colors';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const AuthScreenWrapper = ({ children, title, message, buttonText, buttonPath }) => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior="height"
      style={styles.screen}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {children}
        <View style={styles.prompt}>
          <Text style={styles.promptMessage}>{message}</Text>
          <TouchableOpacity style={styles.buttonSecondary} onPress={() => navigation.navigate(buttonPath)}>
            <Text style={styles.promptButton}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.bg,
  },
  title: {
    fontSize: 24,
    fontFamily: 'kaisei-extraBold',
    marginBottom: 18,
    textAlign: 'center',
  },
  container: {
    width: '80%',
    maxWidth: 400,
    padding: 12,
    margin: 12,
    borderColor: COLORS.text,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  prompt: {
    alignItems: 'center',
  },
  promptMessage: {
    fontSize: 16,
    fontFamily: 'kaisei-Regular',
    color: '#333',
  },
  promptButton: {
    fontSize: 16,
    fontFamily: 'kaisei-Medium',
    color: COLORS.text,
  },
  buttonSecondary:{
    backgroundColor: COLORS.accent,
    marginVertical: 20,
    padding: "4%",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  }
});

export default AuthScreenWrapper;