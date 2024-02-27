import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ProfilePicture = ({ imageUri, name }) => {
  return (
    <View style={styles.container}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : (
        <Text style={styles.initials}>{name.charAt(0)}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  initials: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ProfilePicture;
