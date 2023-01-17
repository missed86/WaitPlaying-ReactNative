import { NavigationContainer } from '@react-navigation/native'
import {View, Text, StyleSheet} from 'react-native'
import BottomTab from './src/navigation/BottomTab'

export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.logoView}>
      <Text style= {styles.logoText}>WaitPlaying</Text>
    </View>
      <BottomTab/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  logoView: {
    backgroundColor: '#000',
    paddingTop:30,
    justifyContent:'center',
    width:'100%'
  },
  logoText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})