import { Text, StyleSheet } from "react-native";
import theme from "../theme.js";

const styles = StyleSheet.create({
	text: {
		fontSize: theme.fontSizes.body,
		color: theme.colors.textPrimary,
		fontFamily: theme.fonts.main,
		fontWeight: theme.fontWeights.normal,
	},
	bold: {
		fontWeight: theme.fontWeights.bold,
	},
	colorPrimary: {
		color: theme.colors.primary,
	},
	colorSecondary: {
		color: theme.colors.textSecondary,
	},
	strong: {
		color: "#09f",
		fontWeight: "bold",
		marginBottom: 5,
	},
	subheading: {
		fontSize: theme.fontSizes.subheading,
	},
	small: {
		fontSize: 10,
	},
});

export default function StyledText({
	children,
	color,
	fontSize,
	fontWeight,
	style,
	...restOfProps
}) {
	const textStyles = [
		styles.text,
		color === "primary" && styles.colorPrimary,
		color === "secondary" && styles.colorSecondary,
		fontSize === "subheading" && styles.subheading,
		fontWeight === "bold" && styles.bold,
		style,
	];

	return (
		<Text style={textStyles} {...restOfProps}>
			{children}
		</Text>
	);
}
