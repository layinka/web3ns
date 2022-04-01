import React, {useEffect, useState} from 'react';
import './styles/App.css';
import contractAbi from './utils/XNS.json';
import {ethers} from 'ethers';

const tld = '.mtr';
const CONTRACT_ADDRESS = '0xbe42763fa86cC63808D170BBe7b179ccB300b5E3';


const App = () => {

	const [currentAccount, setCurrentAccount] = useState('');
	const [domain, setDomain] = useState('');

	const connectWallet = async () => {
		try {
		  const { ethereum } = window;
	
		  if (!ethereum) {
			alert("Get MetaMask -> https://metamask.io/");
			return;
		  }
	
		  // Fancy method to request access to account.
		  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
		
		  // Boom! This should print out public address once we authorize Metamask.
		  console.log("Connected", accounts[0]);
		  setCurrentAccount(accounts[0]);
		} catch (error) {
		  console.log(error)
		}
	}
 
	const checkForEthWallet = async () => {
		const {ethereum} = window;
		if (!ethereum) {
			console.log("No ethereum object found, cannot run DApp. Download MetaMask or any Ethereum Wallet");
			return;
		} else {
			console.log("Ethereum object: ", ethereum);
		}
		// Check if we're authorized to access the user's wallet
		const accounts = await ethereum.request({ method: 'eth_accounts' });

		// Users can have multiple authorized accounts, we grab the first one if its there!
		if (accounts.length !== 0) {
			const account = accounts[0];
			console.log('Found an authorized account:', account);
			setCurrentAccount(account);
		} else {
			 console.log('No authorized account found');
		}
	};

	const notConnectedBtn = () => {
		return <div className="connect-wallet-container">
      		<button onClick={connectWallet} className="cta-button connect-wallet-button">
        		Connect Wallet
      		</button>
    	</div>
	};

	const mintDomain = async() => {
		if (!domain) { return }
		if (domain.length < 3) {
			alert('Domain must be 3 characters long');
			return;
		};

		const price = '0.05';

		try {
			const {ethereum} = window;
			if (ethereum) {
				const provider = new ethers.providers.Web3Provider(ethereum);
				const signer = provider.getSigner();
				const contract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi.abi, signer);

				let txn = await contract.register(domain, {value: ethers.utils.parseEther(price)});
				const receipt = await txn.wait();

				if (receipt.status === 1) {
					console.log("Domain minted! https://scan-warringstakes.meter.io/tx/"+txn.hash);	
					setDomain('');
				}
				else {
					alert("Transaction failed! Please try again");
				}
			};
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		checkForEthWallet();
	  }, []);

	const renderInputForm = () =>{
		return (
			<div className="form-container">
				<div className="first-row">
					<input
						type="text"
						value={domain}
						placeholder='domain'
						onChange={e => setDomain(e.target.value)}
					/>
					<p className='tld'> {tld} </p>
				</div>
				<div className="button-container">
					<button className='cta-button mint-button' disabled={null} onClick={mintDomain}>
						Mint
					</button>  
				</div>

			</div>
		);
	}

  return (
		<div className="App">
			<div className="container">

			<div className="header-container">
				<header>
				<div className="left">
				<p className="title">Meter Name Service</p>
				<p className="subtitle">A decentralized name service for Meter.io!</p>
				
				</div>
				</header>
			</div>
			
			<div>
			{!currentAccount && notConnectedBtn()}
			{currentAccount && renderInputForm()}
			</div>

			</div>
		</div>
	);
}

export default App;
