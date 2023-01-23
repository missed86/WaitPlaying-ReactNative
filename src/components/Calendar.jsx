import { View, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		color: "#fff",
		flexDirection: "column",
	},
	calendarHeader: {
		flexDirection: "row",
        height:60,
        alignItems:'center',
	},
	month: {
		fontSize: 20,
		color: "#fff",
		textAlign: "center",
		// padding: 10,
		flex: 1,
	},
	weekdays: {
        flexDirection: "row",
		backgroundColor: "#325434",
        justifyContent: 'center',
	},
	weekday: {
        textAlign:'center',
		flex: 1,
		color: "#fff",
	},
	cellsRow: {
		flexDirection: "row",
	},
	cell: {
		flex: 1,
		color: "#fff",
		borderWidth: 1,
		borderColor: "black",
		backgroundColor: "#333",
		alignItems: "center",
		justifyContent: "center",
		height: 75,
	},
    cellText:{
        color: "#fff",
        fontSize:16,
        textShadowColor: "#000",
        textShadowRadius: 10,
        textShadowOffset: {width: 0, height: 0},
    },
});

export default function Calendar() {
	const [date, setDate] = useState(new Date());

	const currentDay = date.getDay();
	const currentMonth = date.getMonth();
	const currentYear = date.getFullYear();
	const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
	const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
	const firstDayOfMonthWeekday = (firstDayOfMonth.getDay() + 6) % 7;
	const rows = [];
	let daysCounter = 1;
	for (let i = 0; i < 6; i++) {
		const row = [];
		for (let j = 0; j < 7; j++) {
			const day = i === 0 ? j - firstDayOfMonthWeekday + 1 : daysCounter++;
			if (day <= 0 || day > daysInMonth) {
				row.push(<View style={styles.cell} key={j} />);
			} else {
				row.push(
					<View style={styles.cell} key={j}>
						<Text style={styles.cellText}>{day}</Text>
					</View>
				);
			}
		}
		rows.push(
			<View style={styles.cellsRow} key={i}>
				{row}
			</View>
		);
	}
	const monthList = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const handleClickPrevMonth = () => {
		setDate(new Date(currentYear, currentMonth - 1, 1));
	};
	const handleClickNextMonth = () => {
		setDate(new Date(currentYear, currentMonth + 1, 1));
	};

	return (
		<View style={styles.container}>
			<View style={styles.calendarHeader}>
				<Button
					color="transparent"
					title="Prev"
					onPress={handleClickPrevMonth}
				/>
				<Text style={styles.month}>
					{monthList[currentMonth]} {currentYear}
				</Text>
				<Button
					color="transparent"
					title="Next"
					onPress={handleClickNextMonth}
				/>
			</View>
			<View style={styles.weekdays}>
				<Text style={styles.weekday}>Mon</Text>
				<Text style={styles.weekday}>Tue</Text>
				<Text style={styles.weekday}>Wed</Text>
				<Text style={styles.weekday}>Thu</Text>
				<Text style={styles.weekday}>Fri</Text>
				<Text style={styles.weekday}>Sat</Text>
				<Text style={styles.weekday}>Sun</Text>
			</View>
			{rows}
		</View>
	);
}
