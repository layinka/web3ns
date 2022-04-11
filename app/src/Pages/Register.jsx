import {useEffect, useState} from 'react';
import { 
    useParams,
    Link
} from "react-router-dom";
import { useSelector } from 'react-redux';
import {toast} from 'react-toastify';

import {ethers, utils, BigNumber} from 'ethers';

import AppConfig from '../Config';

import Navbar from '../Components/Header';

import './styles/RegisterPage.css';

function Register({}) {

    const [regPeriod, setRegPeriod] = useState(0);
    const [domainPrice, setDomainPrice] = useState(0.0);

    const connectedAccount = useSelector(state => state.account);

    let { domain } = useParams();
    let manageLink = `/manage/${domain}`

    const getPriceForDomain = async (domainName) => {
        const provider = new ethers.providers.JsonRpcProvider(AppConfig.RPC_URL);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(AppConfig.CONTRACT_ADDRESS, AppConfig.CONTRACT_ABI.abi, signer);
        var px = await contract.price(domainName);
        px = ethers.utils.formatEther(px._hex);
        setDomainPrice(px);
    }

    useEffect(() => {
        if (domain) {
            document.title = `MNS Search: ${domain}${AppConfig.TLD}`;
            getPriceForDomain(domain);
        }
     }, []);

    const handleRegistrationChange = (event) => {
        setRegPeriod(event.target.value);
    }

    const handleRegistration = async () => {
        try {
            const eth = window.ethereum;
            const provider = new ethers.providers.Web3Provider(eth);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(AppConfig.CONTRACT_ADDRESS, AppConfig.CONTRACT_ABI.abi, signer);

           // var txnPrice = await contract.estimateGas.registerDomain(connectedAccount, domain, ethers.utils.parseEther(regPeriod));
           // txnPrice = ethers.utils.formatEther(txnPrice);

            var px = await contract.price(domain);
            px = ethers.utils.formatEther(px._hex);

            const txn = await contract.registerDomain(connectedAccount, domain, ethers.utils.parseEther(regPeriod), {
                value: ethers.utils.parseEther(px),
                gasLimit: 4700000
            });
            const txnReceipt = await txn.wait();
            console.log(txnReceipt);
            if (txnReceipt.status === 1) {
                toast("Your transaction was successful!");
                alert("https://scan-warringstakes.meter.io/tx/" + txnReceipt.transactionHash)
            } else {
                toast.error("Your transaction was not successful. Please try again.")
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Navbar/>
            <div className="AppContainer">
                <div className="registerPanel">
                    <h1>{domain}{AppConfig.TLD}</h1>
                    <h3>Register A Name</h3>
                    <label>Registration Period</label>
                    <input type="number" id="regPeriod" name="regPeriod" min="1" max="10" onChange={handleRegistrationChange}/>
                    <p>Registration price to pay: {domainPrice} MTR</p>
                    <button onClick={handleRegistration}>Proceed to Register</button>
                    <p>Do you own this domain? 
                        <Link to={manageLink}>
                            Manage it here.
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )

}

export default Register;