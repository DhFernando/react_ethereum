//SPDX-License-Identifier: MIT
pragma solidity >= 0.5.0 < 0.7.0;

contract EthReact {
    string addr;
    
   constructor(string memory _addr) public {
    addr = _addr;
   }


    uint data =9 ;
    function getData() external   view  returns (uint){ return data; }
    function getData2() external view returns( string memory){ return addr; }

    function setData(address payable _toAdd) external payable { _toAdd.transfer(msg.value);  }

    function setDataPrivate(uint _data) private { data = _data + 10 ; }

}