import React, { useEffect, useState } from "react";
import axios from "axios";
import { ReactComponent as Loading } from "../loading.svg";
import { Fragment } from "react/cjs/react.production.min";

const HomePage = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        const getNews = async () => {
            const {data} = await axios.get('http://localhost:8080/posts')
            setNews(data.data)
        }
        getNews()
    }, [])
    return (
        <div className="container mt-3">
            {
                news.length === 0 && (
                    <Loading />
                )  
            }

            {
                news.length > 0 && (
                    <div>
                        {news.map( (item, index) => (
                            <Fragment>
                                <h3 key={index}>{item.title}</h3>
                                <img src={item.images} alt={item.title} />
                                <p>{item.description}</p>
                            </Fragment>
                        ))}
                    </div>
                )
            }
            home
        </div>
    )
}

export default HomePage
