// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    Link,
  } from "react-router-dom";

import Navbar from '../Components/Header';

import './styles/HomePage.css';

function Home() {
    const connectedAccount = useSelector(state => state.account);

    return (
        <div className="Home">
            <Navbar/>
            <div className="AppContainer">
                <h1>Decentralized naming for wallets and IPFS storage</h1>
                <p>Your web3 name for everything on Meter.io</p>
                <Link to="/app" style={{
                    border: '3px solid #000',
                    background: "#000",
                    color: "#FFF"
                }}>Launch App</Link>
            </div>
        </div>
    )
};

export default Home;