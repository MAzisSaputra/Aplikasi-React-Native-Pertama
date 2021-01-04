import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <Text>Akmal</Text>
      <Text>Rino</Text>
      <Azis />
      <Text>Iyaw</Text>
      <Text>Rohan</Text>
      <Text>Zidan</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}}/>
    </View>
  );
};

const Azis = () => {
  return <Text>Azis</Text>;
};

const Photo = () => {
  return (
    <Image 
    source={{uri: 'https://placeimg.com/100/100/tech'}} 
    style={{width: 100, height: 100}}/
    >
  );
};
export default App;