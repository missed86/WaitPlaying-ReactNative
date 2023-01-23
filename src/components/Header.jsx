import { View, StyleSheet, Text } from "react-native";
import Logo from "./Logo"

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: '#222',
    height:60,
  },
  logo: {
    textAlign: 'center',
    backgroundColor: '#222',
  },

})

export default function Header() {
    return(
        <View style={styles.container}>
          <Text>1</Text>
          <Logo style={styles.logo}/>
          <Text>1</Text>
        </View>
    )
}