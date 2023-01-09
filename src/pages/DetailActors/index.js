import React, {useContext, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {APIKEY} from "../../lib/ApiKey";
import axios from "axios";
import Cast from "../../img/person1.png"
import Slider from "react-slick";
import {LanguageContext} from "../../context";

const DetailActors  = () => {
    const {castId} = useParams()
    const [DetailActors, setDetailActors]= useState({})
    const [movieCredits, setMovieCredits]= useState([])
    const [viewMore, setViewMore] = useState(500)
    const {language} = useContext(LanguageContext)
    const getDetailactors = async (id, ApiKey) => {
        const url = await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${ApiKey}&language=${language}`)
        const {data} = await url
        setDetailActors(data)
    }
    const getMovieCredits = async (id, ApiKey) => {
        const url = await axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${ApiKey}&language=${language}`)
        const {data} = await url
        setMovieCredits(data.cast.slice(0,10))
    }

    useEffect(() => {
        getDetailactors(castId,APIKEY)
        getMovieCredits(castId,APIKEY)
    },[language])
    console.log(movieCredits)
    const toggleViewMore = (text) => {
        setViewMore(viewMore === 500 ? text.length : 500)
    }

    const {name,profile_path,place_of_birth,biography,birthday} =DetailActors

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div id="detail-actors">
            <div className="container">
                <div className="detail-actors">
                    <div>
                        {
                            profile_path ?<img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`} alt=""/>
                                :<img src={Cast} width={300} alt=""/>
                        }
                    </div>
                    <div className="detail-actors--desc">
                        <h1>{name}</h1>
                        <h3>{place_of_birth}</h3>
                        <h3>{birthday}</h3>
                        <p>{biography ? biography.slice(0,viewMore) : biography}</p>
                        {
                            biography ? biography.length > 500 ? <span style={{
                                color:"green",
                                fontSize:"18px",
                                cursor:"grab"
                            }} onClick={() => toggleViewMore(biography)
                            }>{viewMore === 500 ? "Читать дальше..." : "Свернуть"}</span> : ""
                                : ""
                        }
                    </div>
                </div>
                <Slider {...settings}>
                    {
                        movieCredits.map(el => (
                            <div className="movie-credits">
                                <Link to={`/movies/movie-detail/${el.id}`}>
                                    {
                                        el.poster_path ?<img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`}  width={180}  height={250} alt=""/>
                                            :<img src={Cast} width={180}  height={250} alt=""/>
                                    }

                                </Link>
                                <p>{el.title}</p>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default DetailActors ;

//