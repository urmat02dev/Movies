import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../lib/ApiKey";
import Slider from "react-slick";

const MoviesVideos = ({movieId}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
    const [videos, setVideos] =useState([])
    const getMoviesVideos = async (id, ApiKey) => {
        const url = await axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${ApiKey}&language=en-US`)
        const {data} = await url

        setVideos(data.results)

    }

    useEffect(() => {
       getMoviesVideos(movieId,APIKEY)
    },[])

    console.log(videos)
    return (
        <div>
            <div id="videos">
                <div className="container">
                    <div className="videos">
                        <Slider {...settings}>
                            {
                                videos.map(el => (
                                   <div style={{
                                       background:"red",
                                       width:"400px",
                                       height:"260px"
                                   }}>
                                       <iframe width="360" height="250" src={`https://www.youtube.com/embed/${el.key}`}
                                               title="YouTube video player" frameBorder="0"
                                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                               allowFullScreen></iframe>
                                   </div>
                                ))
                            }

                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};
// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
export default MoviesVideos;