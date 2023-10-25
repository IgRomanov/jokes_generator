import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material"
import { useContext, useEffect, useMemo, useState } from "react";
import { Context } from "../..";
import axios from "axios";
import { observer } from "mobx-react-lite"

const Content = observer(() => {
    const [currentJokes, setCurrentJokes] = useState([]);
    const [count, setCount] = useState(5);
    const {jokes} = useContext(Context);
    
    const handleMoreClick = () => {
        axios.get("https://api.chucknorris.io/jokes/random")
        .then(res => res.data) 
        .then((joke) => {
            jokes.setJoke([{ joke: joke.value, id: joke.id }, ...jokes.jokes]);
            setCurrentJokes(jokes.jokes);
            console.log(currentJokes)
        })
        .catch(e => console.log(e))
    }

    useEffect(() => {
			console.log("изменение");
		}, [jokes.jokes]);


	return (
		<Grid container spacing={1}>
			<Grid item sx={{ width: "240px", padding: "12px 16px", margin: "16px" }}>
				<Button
					sx={{ width: "100%" }}
					variant="contained"
					onClick={handleMoreClick}
				>
					MORE!!!!
				</Button>
			</Grid>
			{currentJokes.map((joke) => {
            <Grid item>
                <Card
                    sx={{
                        maxWidth: "240px",
                        padding: "12px 16px",
                        margin: "16px",
                    }}
                >
                    <p>{joke.joke}</p>
                </Card>
            </Grid>;
			})}
		</Grid>
	);
});

export default Content;
