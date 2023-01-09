import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../lib/ApiKey";
import {AiOutlineStar} from "react-icons/ai"
import MovieCard from "../pages/MovieCard";
import {LanguageContext} from "../context";

const Popular = () => {
    const [topRated, setTopRated] = useState([])
    const {language} = useContext(LanguageContext)
    const [currentPage, setCurrentPage]=useState(1)
    const [number,setNumber] = useState(1)
    const getTopRated = async () => {
        const url = await  axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=${language}&page=${currentPage}`)
        const {data} =url
        await setTopRated(data.results)
        window.scroll(0,0)
        setCurrentPage(data.page)
    }
    useEffect(() => {
        getTopRated()
    }, [language,currentPage])

    console.log(topRated)

    return (
        <div id="movies">
            <div className="container">
                <div className="movies">
                    {
                        topRated.map(el => (
                            <MovieCard el={el}/>
                        ))
                    }
                    <div className="buttons">
                        <button className="btn-page" onClick={() => setCurrentPage(number) } >{number}</button>
                        <button className="btn-page" onClick={() => setCurrentPage(number+1)}>{number+1 }</button>
                        <button className="btn-page" onClick={() => setCurrentPage(number+2)}>{number+2 }</button>
                        <button className="btn-page" onClick={() => setCurrentPage(number+3)}>{number+3 }</button>
                        <button className="btn-page" onClick={() => setCurrentPage(number+4)}>{number+4 }</button>
                        <button className="btn-page" onClick={() => setCurrentPage(number+5)}>{number+5 }</button>
                        <button className="btn-page" onClick={() => setCurrentPage(number+6)}>{number+6 }</button>
                        <button className="btn-page" onClick={() => setCurrentPage(number+7)}>{number+7 }</button>
                        <button className="btn-page" onClick={() => setCurrentPage(number+8)}>{number+8 }</button>
                        <button className="btn-page" onClick={() => setCurrentPage(number+9)}>{number+9 }</button>

                    </div>
                    <div className="buttons--next">
                        <button style={{
                            visibility: currentPage === 1 ? "hidden" : "visible"}} className="btn-page--prev" onClick={() => setCurrentPage(currentPage-1) } >Предыдущая</button>
                        <button className="btn-page--prev" onClick={() => setCurrentPage(currentPage+1) } >Следующая</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Popular;