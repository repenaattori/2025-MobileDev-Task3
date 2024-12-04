import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container} testID='view'>
      <Text style={styles.header} testID='header'>Personal information</Text>
      <TextInput style={styles.textInput} placeholder='First name'/>
      <TextInput style={styles.textInput} placeholder='Last name' />
      <TouchableOpacity onPress={() => console.log("Submit")}>
        <Text style={{backgroundColor: '#F09E51',textAlign: 'center', borderWidth: 1, padding: 10, fontWeight: 'bold'}}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    margin: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#70675E', 
  },
  header:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff', 
    marginBottom: 10
  },
  textInput:{
    borderWidth: 1,
    backgroundColor: '#ffffff',
    marginBottom: 10
  }

});
