import React, {useState, useEffect, useRef} from "react";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Jokes(props) {
    let category = props.category;
    let jokes = useRef([]);
    const [viewJokes, setViewJokes] = useState([]);
    const limit = props.page ? props.page * 6 : 6;

    function setViewData()  {
        if (Object.keys(jokes.current).length) {
            if (category !== '') {
                if (jokes.current.hasOwnProperty(category)) {
                    const tempData = jokes.current[category].filter((j, i) => i < limit);
                    setViewJokes(od => tempData);
                } else {
                    setViewJokes(od => []);
                }
            } else {
                category = Object.keys(jokes.current)[0];
                const tempData = jokes.current[category].filter((j, i) => i < limit)
                setViewJokes(od => tempData);
            }
        }
    }

    useEffect(() => {
        let url = "https://api.chucknorris.io/jokes/search?query=all";
        if (!jokes.current.length) {
            const storedJokes = localStorage.getItem('jokes');
            if (storedJokes) {
                jokes.current = JSON.parse(storedJokes);
                setViewData();
            } else {
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        const dataArr = data.result;
                        const tempData = {};
                        dataArr.forEach(d => {
                            const cat = d.categories.length ? d.categories[0].replace(/\s/g, '-') : 'uncategorized';
                            if (!tempData.hasOwnProperty(cat)) {
                                tempData[cat] = [];
                            }

                            tempData[cat].push({
                                id: d.id,
                                joke: d.value,
                            });
                        });

                        localStorage.setItem('jokes', JSON.stringify(tempData));
                        jokes.current = tempData;
                        setViewData();
                    });
            }
        }

    }, [props.category, props.page]);


    return(
        <div className={'jokes'}>
            <div className={'cat-name'}>{category.toUpperCase()}</div>
            <div className={'joke-container'}>
                {   viewJokes.length ?
                    viewJokes.map((joke, index) => {
                        return(
                            <a key={joke.id} className={'joke'} href={'id/' + joke.id}>{joke.joke.length > 200 ? joke.joke.slice(0, 200) + '...' : joke.joke }</a>
                        );
                    })
                    :
                    <div className={'joke-not-found'}>No jokes found.... !!</div>
                }
            </div>

            {
                (() => {
                    if (jokes.current.hasOwnProperty(category)) {
                        if (jokes.current[category].length > limit) {
                            return (<div className={'view-more'} onClick={() => {
                                props.setPage(ov => ov + 1);
                            }
                            }>View More <FontAwesomeIcon icon={faArrowDown} /></div>);
                        }
                    }
                    return ('');
                })()
            }

        </div>
    );

}

export default Jokes;
