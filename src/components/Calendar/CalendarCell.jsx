// import { Link } from "react-router-dom";
import { View, Text } from "react-native"

export default function CalendarCell({ day, ...other }) {
	return (
		<>
				<View className="Calendar-cell" {...other}>
					<Text className="CalendarCell-day">{day}</Text>
				</View>
			
		</>
	);
}
// import { Link } from "react-router-dom";

// export default function CalendarCell({ game, children, ...other }) {
// 	console.log(game);
// 	return (
// 		<>
// 			{game ? (
// 				<Link to={`../game/${game[0].slug}`} className="no-link">
// 					<View className="Calendar-cell" {...other}>
// 						<Text class="CalendarCell-day">{children}</Text>
// 						{game && (
// 							<img
// 								className="CalendarCell-cover"
// 								src={game[0].cover}
// 								alt={game[0].title}
// 							></img>
// 						)}
// 					</View>
// 				</Link>
// 			) : (
// 				<View className="Calendar-cell" {...other}>
// 					<Text class="CalendarCell-day">{children}</Text>
// 				</View>
// 			)}
// 		</>
// 	);
// }
