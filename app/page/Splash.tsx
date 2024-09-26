import { ThemedText, ThemedView } from '@/components';
import { StyleSheet, TouchableOpacity } from 'react-native';

const Splash = () => {
  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">Solver for SET</ThemedText>
      <TouchableOpacity accessibilityLabel="Learn more about this purple button" style={styles.solveButton}>
        <ThemedText>Solve</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  solveButton: {
    backgroundColor: '#147EFB',
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 4,
    marginTop: 20
  }
  // stepContainer: {
  //   gap: 8,
  //   marginBottom: 8
  // },
  // reactLogo: {
  //   height: 178,
  //   width: 290,
  //   bottom: 0,
  //   left: 0,
  //   position: 'absolute'
  // }
});

export default Splash;
