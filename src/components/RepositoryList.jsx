import { View, Text, FlatList } from "react-native";
import RepositoryItem from "./RepositoryItem";

const games = [
	{
		title: "God of War Ragnarök",
		slug: "god-of-war-ragnarok",
		cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.png",
		platforms: ["PS5", "PS4"],
		id: "sda54d3sa",
	},
	{
		title: "The Callisto Protocol",
		slug: "the-callisto-protocol",
		cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4ymo.png",
		platforms: ["SeriesX/S", "One", "PS4", "PS5", "PC"],
		id: "hft6htr5",
	},
	{
		title: "A Plague Tale: Requiem",
		slug: "a-plague-tale-requiem",
		cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5pwb.png",
		platforms: ["PS5", "SeriesX/S", "PC"],
		id: "hft6hwetr5",
	},

];
export default function RepositoryList() {
	return (
		<FlatList
			data={games}
			renderItem={({ item: game }) => (
				<RepositoryItem {...game}/>
			)}
		></FlatList>
	);
}
