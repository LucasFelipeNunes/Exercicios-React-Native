import { Button, StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1, backgroundColor:"plum",padding:30}}>
      <Button title="Cadastrar" onPress={()=>alert("Botão clicado!")}/>
      <Button title="Cadastrar" style={styles.button} onPress={()=>alert("Botão clicado!")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
  }
});
