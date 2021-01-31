import * as React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FadeInOut from 'react-native-fade-in-out';

export default function App() {
  const [isVisible, setVisibility] = React.useState<boolean | undefined>();

  const onPress = () => setVisibility((visible) => !visible);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text>Click to fade in / out</Text>
      </TouchableOpacity>
      <FadeInOut style={styles.fade} isVisible={isVisible} duration={1500}>
        <Text>FADE IN / OUT TEXT</Text>
      </FadeInOut>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fade: {
    marginTop: 40,
  },
});
