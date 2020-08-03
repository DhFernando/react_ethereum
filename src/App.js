import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3'

function App() {
  useEffect(()=>{
    loadBlockChainData()
    return()=>{

    }   
  },[])

  const loadBlockChainData = async () => {
      const provider = new Web3.providers.HttpProvider('http://localhost:7545')
      const web3 = new Web3(Web3.givenProvider || provider);  

      const MyContract = require('./smartContract/build/contracts/EthReact.json')


      const id = await web3.eth.net.getId()
      const deployeNetwork = MyContract.networks[id];

      const contract = new web3.eth.Contract(
          MyContract.abi,
          deployeNetwork.address,
      )
      const addresses = await web3.eth.getAccounts()
      const result = await contract.methods.getData().call()
      console.log(result)
  }

  return (
    <div className="App">
        Hello Ethereum
    </div>
  );
}

export default App;
