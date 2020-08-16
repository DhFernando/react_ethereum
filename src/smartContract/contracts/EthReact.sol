pragma solidity ^0.5.0;

pragma experimental ABIEncoderV2;

library Math{
    function sum(uint x , uint y) internal pure returns(uint){ return x + y ; }
    
    function minus(uint x , uint y) internal pure returns(uint){ return x - y ; }
    
    function grate(uint x , uint y) internal pure returns(bool){ return x > y ; }
    
    function multiplication(uint x , uint y) internal pure returns(uint){ return x * y ; }
}

contract EthReact {
      
      enum State { availble , tranfering , complete }
         
      struct Item {
        string name;
        State currentState; 
      }
      
      struct ItemPack { 
        
          uint price;
          Item[] Items;
      }
      
      mapping( address => ItemPack) public ownerItemPacks;
      
      
     
      function createPack(address  _owner,string memory _name , uint _price , uint _qty) public   {
        ItemPack storage newItemPack = ownerItemPacks[_owner];
        
        newItemPack.price = _price;
        for(uint i = 0 ; i < _qty ; i++){
            newItemPack.Items.push(Item( _name , State.tranfering ));
             
        }

        ownerItemPacks[_owner] = newItemPack;

           
     }  
     
    
    function getItem(address _v) public view returns( ItemPack memory){
        
        ItemPack memory memoryItemPack;
         
        Item[] memory memoryArray = new Item[](ownerItemPacks[_v].Items.length);
        
        for(uint i = 0; i < ownerItemPacks[_v].Items.length; i++) {
            memoryArray[i] = ownerItemPacks[_v].Items[i];
        }
        
        memoryItemPack.price = ownerItemPacks[_v].price;
        memoryItemPack.Items = memoryArray ;
        
        return memoryItemPack ;
        
    }
      
}






















