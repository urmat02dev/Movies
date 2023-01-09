import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {APIKEY} from "../../lib/ApiKey";
import MovieCard from "../MovieCard";
import {LanguageContext} from "../../context";

const SearchResult = () => {
    const [result, setResult] =useState([])
    const {moviesName} =useParams()
    const {language} = useContext(LanguageContext)
    const [totalPage, setTotalPage]=useState(1)
    const [currentPage, setCurrentPage]=useState(1)
    const [number,setNumber] = useState(1)

    const getResults = async (name, ApiKey) => {
        const api=await axios(`https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${name}&language=${language}&page=${currentPage}`)
        const {data} = await api
        setTotalPage(data.total_pages)
        window.scroll(0,0)
        setCurrentPage(data.page)
        setResult(data.results)

    }
    // https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
    useEffect(() => {
        getResults(moviesName, APIKEY)

    },[moviesName,language,currentPage])
    console.log(result)

    return (
        <div id="movies">
            <div className="container">
                {
                    result.length ?
                        <div className="movies">

                            {
                                result.map(el => <MovieCard el={el}/>)
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
                                <button style={{visibility: currentPage === 1 ? "hidden" : "visible"}} className="btn-page--prev" onClick={() => setCurrentPage(currentPage-1) } >Предыдущая</button>
                                <button className="btn-page--prev" onClick={() => setCurrentPage(currentPage+1) } >Следующая</button>
                            </div>
                        </div>

                        :
                        <div style={{
                            padding:'18% 10%'
                        }}>
                            <h1>Сиз издеген кино табылган жок!!</h1>
                        </div>
                }



            </div>
        </div>
    );
};

export default SearchResult;