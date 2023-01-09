import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../lib/ApiKey";

import {LanguageContext} from "../../context";
import MoviesVideos from "../MoviesVideos/index";
import {BsListUl} from "react-icons/bs";
import {AiFillHeart, AiFillSave, AiFillStar} from "react-icons/ai";
import Cast from "../Cast";
import ModalWindow from "./ModalWindow";


const DetailPage = () => {
    const [detail, setDetail] = useState({})
    const [cast, setCast] = useState([])
    // useParams()
    const {movieId} = useParams()
    console.log(movieId)
    const {language} = useContext(LanguageContext)

    const getDetail = async (id) => {
       try{
           const url =await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=${language}`)
           const {data} = await url
           await setDetail(data)
       }
       catch (e){
           console.log(e)
       }
    }

    const getCast = async (id, ApiKey) => {
        try{
            const url = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${ApiKey}&language=${language}`)
            const {data} = await url
            await setCast(data.cast)
        }
        catch (e){
            console.log("Error" ,e)
        }
    }

    useEffect(() => {
        getDetail(movieId)
        getCast(movieId, APIKEY)
    }, [language])
    console.log(cast)

    const {title,backdrop_path,overview,release_date,runtime,vote_average} = detail

    return (
        <div id="detail-page" style={{
            background:`url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}") no-repeat center/cover`
        }}>
            <div className="container">
                <div className="detail-page">

                    <ModalWindow detail={detail}/>
                    <div className="detail-page--description">
                        <h1>{title}({release_date ? release_date.slice(0,4) : ""})</h1>
                        <p >{overview}</p>
                        <div className='detail-page--procent'>
                            <div className="detail-page--procent--left">
                                <h3>{Math.floor(vote_average *10) }%</h3>
                            </div>
                            <div className="detail-page--procent--right">
                                <h3>Пользовательский
                                    <br/>счёт</h3>
                            </div>
                            <div className="detail-page--procent--one">
                                <BsListUl/>
                            </div>
                            <div className="detail-page--procent--one">
                                <AiFillHeart/>
                            </div>
                            <div className="detail-page--procent--one">
                                <AiFillSave/>
                            </div>
                            <div className="detail-page--procent--one">
                                <AiFillStar/>
                            </div>
                    </div>
                        <h3>{Math.floor(runtime / 60)}h {runtime % 60}min</h3>

                    </div>

                </div>
            </div>
            <Cast cast={cast}/>
            <MoviesVideos movieId={movieId}/>
        </div>
    );
};

export default DetailPage;