import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ChatScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Chat Screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
