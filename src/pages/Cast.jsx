import React from 'react';
import Slider from "react-slick";
import {Link, NavLink} from "react-router-dom";
import PERSON from "../img/person1.png";
const Cast = ({cast}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
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
        <div className="container">
            <div>
                <Slider {...settings}>
                    {
                        cast.map(el => (

                            <div className="cast-card">
                                <Link to={`/actors/actor-detail/${el.id}`}>
                                    {
                                        el.profile_path ? <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`}alt=""/> :
                                            <img src={PERSON} width={150} alt=""/>
                                    }
                                </Link>

                                <p>{el.name}</p>
                            </div>

                        ))
                    }
                </Slider>
            </div>

        </div>
    );
};

export default Cast;