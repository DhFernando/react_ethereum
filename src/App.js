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

          // smartcontract address
          deployeNetwork.address,
      )
      // account addresses
      const addresses = await web3.eth.getAccounts()
      console.log(addresses)
      
      const result1 = await contract.methods.getData2().call()
      console.log(result1);

      console.log(await contract.methods.setData(addresses[4])
        .send({ from : addresses[3]  , value : web3.utils.toWei('1', 'ether') }))
      
       
      
      const result2 = await contract.methods.getData().call()
      console.log(result2);
     
      console.log(deployeNetwork.address)



      web3.eth.getBalance(addresses[3] , (err , bal)=> {
        console.log(web3.utils.fromWei(bal , 'ether'));
      })
      web3.eth.getBalance(addresses[4] , (err , bal)=> {
        console.log(web3.utils.fromWei(bal , 'ether'));
      })
  }

  return (
    <div className="App">
        Hello Ethereum
    </div>
  );
}

export default App;
