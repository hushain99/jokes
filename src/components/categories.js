import React, {useState, useEffect} from "react";

function Categories(props) {
    const [categories, setCategories] = useState([]);
    const colors = [
        '#FF869E', '#F77E21', '#FAC213', '#BF9742', '#9FC088', '#A1C298', '#FF869E', '#F77E21', '#FAC213', '#BF9742', '#9FC088', '#A1C298',
        '#FF869E', '#F77E21', '#FAC213', '#BF9742', '#9FC088', '#A1C298', '#FF869E', '#F77E21', '#FAC213', '#BF9742', '#9FC088', '#A1C298'
    ];

    useEffect(() => {
        if (!categories.length) {
            const storedCats = localStorage.getItem('categories');
            if (storedCats) {
                setCategories(oldValues => {
                    const dataArr = JSON.parse(storedCats);
                    return dataArr;
                });
            } else {
                fetch('https://api.chucknorris.io/jokes/categories')
                    .then(res => res.text())
                    .then(data => setCategories(oldValues => {
                        const dataArr = JSON.parse(data);
                        dataArr.push('uncategorized');
                        localStorage.setItem('categories', JSON.stringify(dataArr));
                        return dataArr;
                    }));
            }
        }
    }, [categories]);

    const setCat = (category) => {
        props.setCategory(category);
        props.setPage(1);
    }

    return(
        <div className={'categories'}>
            {
                categories.map((cat, key) => {
                    return (<div className={'category'} key={cat.replace(/\s/g, '-')}
                                 onClick={ () => {
                                     setCat(cat.replace(/\s/g, '-'))
                                 }} style={{backgroundColor: colors[key]}}>{cat.toUpperCase()}</div>)
                })
            }
        </div>
    );

}

export default Categories;
