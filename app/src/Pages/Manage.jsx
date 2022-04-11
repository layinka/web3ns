import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    useParams
} from "react-router-dom";
import {ethers} from 'ethers';

import {toast} from 'react-toastify';


import AppConfig from '../Config';
import { addDomainRecord } from '../Store';

import Navbar from '../Components/Header';

import './styles/ManagePage.css';

function Manage({}) {
    let { domain } = useParams();

    const [controllerAddress, setControllerAddress] = useState("0x0000000000000000000000000000000000000000");

    const record = useSelector(state => state.record);
    const dispatch = useDispatch();

    const updateRecords = async () => {
        const provider = new ethers.providers.JsonRpcProvider(AppConfig.RPC_URL);
        const signer = provider.getSigner();
        const inst = new ethers.Contract(AppConfig.CONTRACT_ADDRESS, AppConfig.CONTRACT_ABI.abi, signer);
        const domainInfo = await inst.getDomainInfoByName(domain);


        let regDate = domainInfo.registrationDate.toNumber();
        let expiryDate = domainInfo.expiry.toString();

        const rD = new Date(regDate * 1000)
        const eD = new Date(expiryDate / 10000000000000)


        let domainRecord = {
            label: domainInfo.label,
            registrant: domainInfo.registrant,
            controller: domainInfo.controller,
            registrationDate: String(rD),
            expiry: String(eD),
            records: {
                ethAddress: domainInfo.records.ethAddress,
                email: "",
                url: "",
                discord: "",
                description: "",
                avatar: domainInfo.records.avatar,
            }
        }

        dispatch(
            addDomainRecord(domainRecord)
        );
    }

    const handleControllerFormChange = (event) => {
        setControllerAddress(event.target.value)
    }

    const handleUpdateControllerRecord = async (event) => {
        event.preventDefault();
        const eth = window.ethereum;
        const provider = new ethers.providers.Web3Provider(eth);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(AppConfig.CONTRACT_ADDRESS, AppConfig.CONTRACT_ABI.abi, signer);
        let txn = await contract.setControllerForDomainLabel(domain, controllerAddress);
        const txnReceipt = await txn.wait();
        if (txnReceipt.status === 1) {
            toast("Your transaction was successful!");
            alert("https://scan-warringstakes.meter.io/tx/" + txnReceipt.transactionHash)
        } else {
            toast.error("Your transaction was not successful. Please try again.")
        }
    }

    useEffect(() => {
        updateRecords();
    }, []);

    return (
        <>
            <Navbar/>
            <div className="AppContainer">
                <h2>Domain: {domain}{AppConfig.TLD}</h2>
            </div>
            <div className="form-container">
                {record && (
                    <> 
                        <img src={record.records.avatar} /><br/>
                        <span>
                            <label>Domain Label:</label>
                            <input id="domainLabel" type="text" value={record.label} placeholder="domain label" />
                        </span><br/>
                        <span>
                            <label>Domain Registrant:</label>
                            <input id="domainRegistrant" type="text" value={record.registrant} />
                        </span><br/>
                        <span>
                            <label>Domain Controller:</label>
                            <input id="domainController" type="text" 
                            placeholder={record.controller} 
                            /*placeholder="controller address" */
                            onChange={handleControllerFormChange}
                            />
                            <button onClick={handleUpdateControllerRecord}>Update Controller Record</button>
                        </span><br/>
                        <span>
                            <p>Registered On: {record.registrationDate}</p>
                        </span>
                    </>
                )}
            </div>
        </>
    );
}

export default Manage;