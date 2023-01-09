import React, {useState} from 'react';

const ModalWindow = ({detail}) => {
    const [modal, setModal] = useState(false)
    return (
        <>
            <div onClick={() => setModal(true)} className="detail-page--img">
                <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${detail.poster_path}`} width={350} height={500} alt=""/>
            </div>
            <div style={{
            display: modal ? "block" : "none"}
            } className="blur-window">

            </div>
            <div style={{
            transform: modal? "scale(1)" : "scale(0)"
            }
            } id="modal">
                <div className="modal">
                    <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${detail.poster_path}`} width={350} height={500} alt=""/>
                    <div className="modal--desc">
                        <div onClick={() => setModal(false)} className="modal--desc--close">&times;</div>
                        <h1>{detail.title}</h1>
                        <p style={{
                            color:"gray",
                            padding:"5px 0"
                        }}>{detail.release_date}</p>
                        <p style={{
                            color:"blue"
                        }}>{detail.overview}</p>

                        <h3 style={{
                            padding:"8px 0"
                        }}>{Math.floor(detail.runtime / 60)}h {detail.runtime % 60}min</h3>

                        <div className="modal--desc--pro">
                            <h3>{Math.floor(detail.vote_average *10) }%</h3>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ModalWindow;