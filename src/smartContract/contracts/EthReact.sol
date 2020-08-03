//SPDX-License-Identifier: MIT
pragma solidity >= 0.5.0 < 0.7.0;

contract EthReact {
  // constructor() public {
    
  // }


    uint data =9 ;
    function getData() external view returns(uint){ return data; }
    function setData(uint _data) external { data = _data; }
    function setDataPrivate(uint _data) private { data = _data + 10 ; }

}
