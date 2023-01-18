import { View, Text, StyleSheet, Image } from "react-native";
import StyledText from "./StyledText";

const styles = StyleSheet.create({
    container: {
        padding: 20, paddingBottom: 5, paddingTop: 5
    },
    image: {
        width: 150,
        height:200,
        borderRadius: 5
    }
})

export default function RepositoryItem(props) {
	return (
		<View
			key={props.id}
			style={styles.container}
		>
            <Image style={styles.image} source={{uri: props.cover}}/>
			<StyledText fontSize="subheading" fontWeight="bold">{props.title}</StyledText>
			<StyledText>Slug: {props.slug}</StyledText>
			<StyledText>Cover: {props.cover}</StyledText>
			<StyledText>Plaforms: {props.platforms}</StyledText>
		</View>
	);
}
