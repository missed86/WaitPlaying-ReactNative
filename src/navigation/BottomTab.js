import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import ComingScreen from "../screens/ComingScreen";
import HomeScreen from "../screens/HomeScreen";
import ReleasesScreen from "../screens/ReleasesScreen";
import SubscriptionScreen from "../screens/SubscriptionScreen";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			activeColor="#fff"
			inactiveColor="#3e2465"
			screenOptions={{
				tabBarStyle: {
					activeTintColor: "tomato",
					inactiveTintColor: "gray",
					backgroundColor: "#000",
					fontWeight: "bold",
				},
			}}
		>
			<Tab.Screen name="Home" component={HomeScreen} options={options} />
			<Tab.Screen name="New Releases" component={ReleasesScreen} options={options} />
			<Tab.Screen name="Coming Soon" component={ComingScreen} options={options} />
			<Tab.Screen name="On Subscription" component={SubscriptionScreen} options={options} />
		</Tab.Navigator>
	);
}

const options = {
    headerShown: false,
    styles: { backgroundColor : "#000"}
}

const styles = StyleSheet.create({
	navigator_tab: {
		backgroundColor: "black",
	},
});
