import React, {useState, useEffect, useRef} from "react";
import Categories from "../../components/categories";
import Jokes from "../../components/jokes";

function Home() {
    const [category, setCategory] = useState('uncategorized');
    const [page, setPage] = useState(1);

    // useEffect(() => {
    //     console.log(category)
    // })

    return (
        <div className={'home'}>
            <Categories setCategory={setCategory} setPage={setPage} />
            <Jokes category={category} page={page} setPage={setPage} />
        </div>
    );
}

export default Home;
