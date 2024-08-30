import { StatusBar } from 'expo-status-bar';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <View style={{flex:1, backgroundColor:"orange"}}>
        <Text>a</Text>
      </View>
      <View style={{flex:2, backgroundColor:"white"}}></View>
      <View style={{flex:2, backgroundColor:"white"}}>
        <ImageBackground source={{uri:"https://picsum.photos/200/300"}} style={{flex:1,justifyContent:'center'}}></ImageBackground>
      </View>
      <View style={{flex:1, backgroundColor:"gray", alignItems:"center", padding:"3px"}}>
        <Text style={{color:"white"}}>Teste</Text>
      </View>

    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
