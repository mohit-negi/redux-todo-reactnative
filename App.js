import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView } from 'react-native';
import TodoHedaer from './src/components/TodoHedaer';

export default function App() {
  return (
    <SafeAreaView classname="flex-1 border-red-950" >
      {/* <StatusBar style="auto" /> */}
      <TodoHedaer/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  container: {
    // flex: 1,
    // borderWidth: 1,
    // borderColor: 'red'
  },
});
