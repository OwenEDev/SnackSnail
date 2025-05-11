import { Keyboard, StyleSheet, TextInput, TouchableWithoutFeedback, useColorScheme } from 'react-native';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        {/* <Text style={styles.title}>Set your limit</Text> */}
          <TextInput style={styles.input} inputMode='numeric' placeholder='Enter your calorie limit' placeholderTextColor={Colors[colorScheme ?? 'light'].placeholderTint}/>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#69B578',
    borderColor: '#69B578',
    borderWidth: 3,
    borderRadius: 7,
    padding: 10,
    minWidth: 250,
    textAlign: 'center'
  },
});
