import * as React from 'react';

import {
  Button,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from "./TabNavigation/index";

const RootNavigator = () => {
  return (
   /* <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'position' : 'height'}
    keyboardVerticalOffset={30}
    style={styles.container}
  >
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>*/
      <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
    </SafeAreaView>
    /*</TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>*/
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },});

export default RootNavigator;