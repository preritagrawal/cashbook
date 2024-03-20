import React from 'react';
import { View, StyleSheet } from 'react-native';
import FAB from './fab'; // Import the FAB component

const App = () => {
  const handleFABPress = () => {
    // Implement your logic here
    console.log('FAB pressed');
  };

  return (
    <View style={styles.container}>
      {/* Your app content */}
      <FAB onPress={handleFABPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // Other styles as needed
  },
});

export default App;
