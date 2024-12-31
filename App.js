import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container} testID='view'>
      <Text testID='header'>Personal information</Text>
      <TextInput placeholder='First name'/>
      <TextInput placeholder='Last name' />
      <TouchableOpacity onPress={() => console.log("Submit")}>
        <Text>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

});
