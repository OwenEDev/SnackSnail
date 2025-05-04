import { StyleSheet, useColorScheme } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useState } from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Colors from '@/constants/Colors';

export default function TabOneScreen() {
    const colorScheme = useColorScheme();
  const [value, setValue] = useState(0);
  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={240}
        width={15}
        fill={80}
        tintColor={Colors[colorScheme ?? 'light'].tint}
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="#E0D8DE">
          {
            () => (
              <Text style={{fontSize: 40, fontWeight: 'bold'}}>
                30
              </Text>
            )
          }
      </AnimatedCircularProgress>
    </View>
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
});
