import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ethers } from 'ethers';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import AppConfig from '../Config';

import Navbar from '../Components/Header';
import LoadingSpinner from '../Components/Spinner';

import './styles/SearchPage.css';

import searchLogo from '../logo.svg';

function Search({ }) {

    /* var contract;
    const getContract = () => {
        try {
        const provider = new ethers.providers.JsonRpcProvider(AppConfig.RPC_URL);
        const signer = provider.getSigner();
        const inst = new ethers.Contract(AppConfig.CONTRACT_ADDRESS, AppConfig.CONTRACT_ABI.abi, signer);
        contract = inst;
        } catch (error) {
        console.log(error);
        }
    } */

    const [searchIsLoading, setSearchIsLoading] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [currentDomain, setCurrentDomain] = useState("");
    const [domainIsRegisterable, setDomainRegistrable] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSearchIsLoading(true);
        const provider = new ethers.providers.JsonRpcProvider(AppConfig.RPC_URL);
        const signer = provider.getSigner();
        const inst = new ethers.Contract(AppConfig.CONTRACT_ADDRESS, AppConfig.CONTRACT_ABI.abi, signer);
        const domainInfo = await inst.getDomainInfoByName(searchValue);
        setSearchIsLoading(false);
        if (domainInfo.label == "") {
            const potentialDomain = String(searchValue + AppConfig.TLD);
            setCurrentDomain(potentialDomain);
            setDomainRegistrable(true);
            toast("This domain is not yet registered. You should register it!");
        } else {
            const potentialDomain = String(searchValue + AppConfig.TLD);
            setCurrentDomain(potentialDomain);
            setDomainRegistrable(false);
            toast("This domain is already registered...wanna see its records?", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        
        
    };
    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };


    const renderDomainRow = () => {
        return (
            <div>
                <h5>Names</h5>
                {domainIsRegisterable? <a href={`/register/${currentDomain.slice(0, -4)}`}>
                <div className="dcDomainRow">
                    <span className="dcDR_Available"></span>
                    <h2>{currentDomain}</h2>
                    <p>Available to register.</p>
                </div>
                </a> : <a href={`/manage/${currentDomain.slice(0, -4)}`}>
                <div className="dcDomainRow">
                    <span className="dcDR_Unavailable"></span>
                    <h2>{currentDomain}</h2>
                    <p>Unavailable to register.</p>
                </div>
                </a>}
            </div>
        );
    }



    useEffect(() => {
        document.title = "MNS App";
        // getContract();
     }, []);

    return (
        <div className="Search">
            <Navbar/>
            <div className="AppContainer">
               <div className="searchMainContainer">
                   <img src={searchLogo} height="192px"/>
                    <h1>Meter Naming Service</h1>
                    {/* <p>Contract Address: {AppConfig.CONTRACT_ADDRESS}</p> */}
                    <form className="searchForm" onSubmit={handleSubmit}>
                        <input  onChange={handleChange} value={searchValue} placeholder="Search name or addresses..."/>
                        <button disabled={searchIsLoading}>Search</button>
                        {searchIsLoading && <LoadingSpinner/>}
                    </form>
               </div>
               <div className="domainsContainer">
                   
                    {currentDomain && renderDomainRow()}
               </div>
            </div>
        </div>
    )
};

export default Search;