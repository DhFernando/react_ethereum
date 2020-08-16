import React, { useEffect } from 'react'; 
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
      const web3 = new Web3(provider || Web3.givenProvider);  
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

      // console.log(
      //   await contract.methods.createPack(addresses[0] , "Apple" , 9 , 6)
      // .send({from : addresses[0]})
      // )

      console.log(
        await contract.methods.createPack( addresses[2] , "Apple2" , 9 , 2 )
        .send({from : addresses[3] , gas:3000000})
      )  
      
      
      const v =  await contract.methods.getItem( addresses[2] )
        .call()
       
        console.log(v)

  
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
