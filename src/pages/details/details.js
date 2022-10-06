import React, {useState, useEffect} from "react";
import { useLoaderData } from "react-router-dom";
import "./details.scss";


export async function loader({ params }) {
    return params.jokeId;
}

function Details() {
    const [jokeId, setJokeId] = useState(useLoaderData());
    const [joke, setJoke] = useState({});
    let jokes = [];

    useEffect(() => {
        const storedJokes = localStorage.getItem('jokes');
        if (storedJokes) {
            jokes = JSON.parse(storedJokes);
        }

        for (let key in jokes) {
            let tempJoke = jokes[key].filter(j => j.id === jokeId);

            if (tempJoke.length) {
                tempJoke[0].category = key
                setJoke(ov => tempJoke[0]);
                break;
            }
        }

    }, [jokeId]);

    return(
        <div className={'details'}>
            {
                Object.keys(joke).length ?
                    <>
                        <h4>{joke.category.toUpperCase()}</h4>
                        <p>{joke.joke}</p>
                    </>
                    : ""
            }

        </div>
    );

}

export default Details;
