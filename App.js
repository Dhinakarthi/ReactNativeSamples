import { SafeAreaView, Text } from "react-native";
import CodePush from "react-native-code-push";

const App = () => {
  return (
    <SafeAreaView style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style = {{fontSize: 30, color: 'red', fontWeight: 'bold'}}>App Version: 2</Text>
    </SafeAreaView>
  )
}

export default CodePush(App);