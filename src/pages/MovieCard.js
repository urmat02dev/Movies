
import {Link, NavLink} from "react-router-dom";

const MovieCard = ({el}) => {

    return (
        <div>
            <div className="card" style={{
                position:"relative"
            }}>
                <Link to={`/movies/movie-detail/${el.id}`}>
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt="" />
                </Link>
                <div style={{
                    paddingTop:'15px',
                    marginBottom:"20px",
                }} >
                    <h3 style={{
                        paddingLeft:"5px"
                    }}>{el.title}</h3>
                    <p style={{
                        paddingLeft:"5px",
                        color:"gray"
                    }}>{el.release_date}</p>
                </div>
                <div className="card--procent" style={{
                    width:"50px",
                    height:"50px",
                    borderRadius:"50%",
                    border:"3px solid green",
                    background:"black",
                    transition:".2s",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    fontSize:"18px",
                    color:"#fff",
                    position: "absolute",
                    left:10,
                    top:279



                }}>
                    {
                        `${el.vote_average * 10}%`
                    }
                </div>


            </div>


        </div>

    );
};

export default MovieCard;