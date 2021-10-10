import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

import {AuthContext} from '../navigation/user/AuthContext';
import COLORS from "../constants/Colors";
import firestore from '@react-native-firebase/firestore';

const ProfileScreen = ({navigation, route}) => {
  const {user, logout} = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const [userData, setUserData] = useState(null);


  const getUser = async() => {
    await firestore()
    .collection('users')
    .doc( route.params ? route.params.userId : user.uid)
    .get()
    .then((documentSnapshot) => {
      if( documentSnapshot.exists ) {
        console.log('User Data', documentSnapshot.data());
        setUserData(documentSnapshot.data());
      }
    })
  }

  useEffect(() => {
    getUser();
    fetchPosts();
    navigation.addListener("focus", () => setLoading(!loading));
  }, [navigation, loading]);

  const handleDelete = () => {};

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.bg}}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.userName}>{userData ? userData.fname || 'Test' : 'Test'} {userData ? userData.lname || 'User' : 'User'}</Text>
        {/* <Text>{route.params ? route.params.userId : user.uid}</Text> */}
        <Text style={styles.aboutUser}>
        {userData ? userData.about || 'No details added.' : ''}
        </Text>
        <View style={styles.userBtnWrapper}>
          {route.params ? (
            <>
              <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
                <Text style={styles.userBtnTxt}>Message</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
                <Text style={styles.userBtnTxt}>Follow</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity
                style={styles.userBtn}
                onPress={() => {
                  navigation.navigate('EditProfile');
                }}>
                <Text style={styles.userBtnTxt}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.userBtn} onPress={() => logout()}>
                <Text style={styles.userBtnTxt}>Logout</Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        <View style={styles.userInfoWrapper}>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>{posts.length}</Text>
            <Text style={styles.userInfoSubTitle}>Posts</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>10,000</Text>
            <Text style={styles.userInfoSubTitle}>Followers</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>100</Text>
            <Text style={styles.userInfoSubTitle}>Following</Text>
          </View>
        </View>

        {posts.map((item) => (
          <PostCard key={item.id} item={item} onDelete={handleDelete} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  userBtn: {
    borderColor: COLORS.accent,
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: COLORS.accent,
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: 'center',
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: COLORS.text,
    textAlign: 'center',
  },
});