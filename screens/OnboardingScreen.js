import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';
import React from 'react';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.navigate('Login')}
        onDone={() => navigation.navigate("Login")}
        pages={[
          {
            backgroundColor: '#AEBAC2',
            image: <Image source={require('../assets/images/onboarding-img1.png')} />,
            title: 'Tu bienestar',
            subtitle: 'Dale a tu piel el cuidado que necesita',
          },
          {
            backgroundColor: '#E7DE96',
            image: <Image source={require('../assets/images/onboarding-img2.png')} />,
            title: 'Elige tus favoritos',
            subtitle: 'Arma tus rutinas personalizadas',
          },
          {
            backgroundColor: '#AEBAC2',
            image: <Image source={require('../assets/images/onboarding-img3.png')} />,
            title: "Transforma tu piel",
            subtitle: 'Haz un seguimiento con tu Diario de Fotos',
          },
        ]}
        titleStyles={{fontFamily: 'kaisei-Medium'}}
        subTitleStyles={{ fontFamily: 'kaisei-Regular'}}
      />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
});