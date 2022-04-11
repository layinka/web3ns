// import {useEffect, useState} from 'react';
import {ethers} from 'ethers';
import {Link} from 'react-router-dom';

import AppConfig from '../Config';

import logo from '../logo-white.svg';
import './styles/Header.css';

import { useDispatch, useSelector } from 'react-redux';
import { addAccount } from '../Store';

function Navbar({}) {

    const connectedAccount = useSelector(state => state.account);
    const dispatch = useDispatch();

    const connectToWallet = async () => {
        console.log("Connecting to wallet...");
        console.log("Current Accounts: ", connectedAccount);
        try {
            if (window.ethereum) {
                // const provider = new ethers.providers.JsonRpcProvider(window.ethereum, AppConfig.RPC_URL);

                window.ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [{
                        chainId: '0x53',
                        chainName: 'Meter Testnet',
                        nativeCurrency: {
                            name: 'Meter Stable',
                            symbol: 'MTR',
                            decimals: 18
                        },
                        rpcUrls: [`${String(AppConfig.RPC_URL)}`],
                        blockExplorerUrls: [`${String(AppConfig.BLOCK_EXPLORER_URL)}`]
                    }]
                }).catch ((error) => {
                    console.log(error)
                })

                var accounts = await ethereum.request({
                    method: "eth_accounts"
                });

                if (accounts.length !== 0) {
                    dispatch(
                        addAccount(`${accounts[0]}`)
                    );
                } else {
                    accounts = await ethereum.request({ method: "eth_requestAccounts" });
                    dispatch(
                        addAccount(`${accounts[0]}`)
                    );
                }


            } else {
                alert("You need MetaMask to use this dapp.");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const disconnectWallet = async () => {
        // window.location.reload()
        dispatch(
            addAccount("")
        );
    }

    const disconnectedBtn = () => {
        return <div>
            <button onClick={connectToWallet}>
                Connect Wallet
            </button>
        </div>;
    }

    const connectedLabel = () => {
        return (<div className="acccountsInfoLabel">
            <p>({connectedAccount})</p>
            {/* window.location.reload() */}
            <button onClick={disconnectWallet}>Disconnect</button>
        </div>);
    }

    return (
        <div className="navbar">
            <div className="navbarContainer">
    
                <div className="nvbLeft">
                    <Link to="/">
                        <img src={logo} />
                    </Link>
                    <p>Network: <span className="nvbLeft-NetworkName">Meter Testnet</span></p>
                    {!connectedAccount && disconnectedBtn()}
                    {connectedAccount && connectedLabel()}
                </div>

                <div className="nvbRight">
                    <a href="https://devpost.com/software/meteor-naming-service-mns"  target="_blank" rel="noopener noreferrer">About</a>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar;