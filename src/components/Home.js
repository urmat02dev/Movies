import React, {useState, useEffect } from 'react';

import{AiFillChrome} from "react-icons/ai"
import axios from "axios";
const Home = () => {

    const [counter, setCounter] =useState(1)
    const [users, setUsers] = useState([])
    const [time, setTime] = useState("")


    useEffect(() =>{
        axios("https://jsonplaceholder.typicode.com/users")
            .then((res) => setUsers(res.data))
        setTimeout(()=>{
            setCounter(counter+1)
            setTime(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
        },1000)

    }, [counter])


    return (
        <div className="container">
            <div style={{
                marginTop:"15%"
            }}>
                {
                    <div className="time">
                        <h1>{time}</h1>

                    </div>
                }
            </div>

        </div>
    );
};

export default Home;