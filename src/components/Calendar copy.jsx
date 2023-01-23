import { useState } from "react";
import { Text, View, Button } from "react-native";
import CalendarCell from "./Calendar/CalendarCell";

const myGames = {
    "2023-01-16": [
		{
			title: "A Plague Tale: Requiem",
			slug: "a-plague-tale-requiem",
			cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5pwb.png",
			platforms: ["PS5", "SeriesX/S", "PC"],
			id: "hft6hwetr5",
		},
	],
    "2023-01-12": [
		{
			title: "The Callisto Protocol",
			slug: "the-callisto-protocol",
			cover: "./assets/pruebas/co4ymo.png",
			platforms: ["SeriesX/S", "One", "PS4", "PS5", "PC"],
			id: "hft6htr5",
		},
	],
    "2023-01-01": [
		{
			title: "God of War Ragnarök",
			slug: "god-of-war-ragnarok",
			cover: "./assets/pruebas/co5s5v.png",
			platforms: ["PS5", "PS4"],
			id: "sda54d3sa",
		},
	],
}


export default function Calendar() {
	const [date, setDate] = useState(new Date());
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

	const currentDay = date.getDay();
	const currentMonth = date.getMonth();
	const currentYear = date.getFullYear();
	const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
	const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
	const firstDayOfMonthWeekday = firstDayOfMonth.getDay() + 1;
	console.log(firstDayOfMonthWeekday);

	const days = [];
	const month = currentMonth < 10 ? `0${currentMonth+1}` : currentMonth+1;

	days.push(
		<CalendarCell
            game={myGames[`${currentYear}-${month}-01`]}
			style={{gridColumn: firstDayOfMonthWeekday}}
			data-date={`${currentYear}-${month}-01`}
			key={`${currentYear}-${month}-01`}
            day='01'/>
	);
	for (let i = 2; i <= daysInMonth; i++) {
		const day = i < 10 ? `0${i}` : i; // agrega cero a la izquierda si i < 10
		const dateString = `${currentYear}-${month}-${day}`;
		days.push(
			<CalendarCell 
            data-date={dateString} 
            key={dateString}
            game={myGames[dateString]} day={day}/>
				
		);
	}

	const handleClickPrevMonth = () => {
		setDate(new Date(currentYear, currentMonth - 1, 1));
	};
	const handleClickNextMonth = () => {
		setDate(new Date(currentYear, currentMonth + 1, 1));
	};

	return (
		<View className="Calendar">
			<View className="Calendar-month">
				<Button onClick={handleClickPrevMonth} title="Prev"/>
				<Text>
					{monthList[currentMonth]} {currentYear}
				</Text>
				<Button onClick={handleClickNextMonth} title="Next"/>
			</View>
			<View className="Calendar-weekdays">
				<View><Text>Su</Text></View>
				<View><Text>Mo</Text></View>
				<View><Text>Tu</Text></View>
				<View><Text>We</Text></View>
				<View><Text>Th</Text></View>
				<View><Text>Fr</Text></View>
				<View><Text>Sa</Text></View>
			</View>
			<View className="Calendar-cells">{days}</View>
		</View>
	);
}
