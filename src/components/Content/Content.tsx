import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material"
import { useContext } from "react";
import { Context } from "../..";
import axios from "axios";
import { observer } from "mobx-react-lite"

const Content = observer(() => {

	interface JokesStoreInterface {
		setJoke: (joke: Array<JokeInterface>) => void;
		allJokes: () => Array<JokeInterface>;
	}
	const jokes: JokesStoreInterface = useContext(Context)?.jokes!
    
    const handleMoreClick = () => {
        axios.get("https://api.chucknorris.io/jokes/random")
        .then(res => res.data) 
        .then((joke) => {
            jokes.setJoke([...jokes.allJokes(), { joke: joke.value, id: joke.id }]);
        })
        .catch(e => console.log(e))
    }

	interface JokeInterface {
		id: number,
		joke: string,
	}

	return (
		<Grid container spacing={1}>
			<Grid item sx={{ width: "240px", padding: "12px 16px", margin: "16px" }}>
				<Button
					sx={{ display: "block", width: "100%", textAlign: "left", height: "50px" }}
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
