import { Text, View } from "react-native";
import Constants from 'expo-constants';
import RepositoryList from "./RepositoryList";
import Header from "./Header";
import Calendar from "./Calendar";

export default function Main() {
	return (
		<View style={{paddingTop: Constants.statusBarHeight, flexGrow:1, backgroundColor:'#000'}}>
			<Header/>
			{/* <Text>Hello World</Text> */}
			{/* <RepositoryList/> */}
			<Calendar/>
		</View>
	);
}
