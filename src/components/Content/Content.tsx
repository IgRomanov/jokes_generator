import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material"
import { useContext } from "react";
import { Context } from "../..";
import axios from "axios";
import { observer } from "mobx-react-lite"
import { JokesValueInterface, JokeInterface } from "../../interfaces/jokesStoreInterfaces";
import { jokesRequestInterface } from "../../interfaces/jokesRequestInterfaces";
import { API_URL } from "../../utils/const";

const Content = observer(() => {
	const jokes: JokesValueInterface = useContext(Context)?.jokes!

	const handleMoreClick = async () => {
		try {
			const { data }: { data: jokesRequestInterface } = await axios.get(`${API_URL}/jokes/random`);
			jokes.setJoke([...jokes.allJokes(), { joke: data.value, id: data.id }]);
		} catch (e) {
			console.log(e);
		}
	};
	
	return (
		<Grid container spacing={1}>
			<Grid item sx={{ width: "240px", padding: "12px 16px", margin: "16px" }}>
				<Button
					sx={{ display: "inline-flex", alignItems: "flex-start", justifyContent: "flex-start", width: "100%",height: "50px", backgroundColor: "#43f9cf" , color: "black"}}
					variant="contained"
					onClick={handleMoreClick}
				>
					MORE!!!!
				</Button>
			</Grid>
			{jokes.allJokes().map((joke: JokeInterface) => (
				<Grid
					key={joke.id}
					sx={{
						width: "240px",
						margin: "16px",
					}}
					item
				>
					<Card sx={{ padding: "12px 16px" }}>
						<p>{joke.joke}</p>
					</Card>
				</Grid>
			))}
		</Grid>
	);
});

export default Content;
