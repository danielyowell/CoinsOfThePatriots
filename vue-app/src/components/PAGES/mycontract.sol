// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ItemMarketplace {

    // item struct
    struct Item {
        uint256 id;
        string name;
        string description;
        uint256 price;
        address seller;
        bool isAvailable;
    }

    // store all the created items, with the item ID as the key
    mapping(uint256 => Item) public items;

    // how many items created?
    uint256 public itemCount;

    // emit events when an item is created/purchased
    event ItemCreated(uint256 id, string name, string description, uint256 price, address seller);
    event ItemPurchased(uint256 id, address buyer);

    // create an item from the given parameters
    // - increment itemCount
    // - add it to the mapping
    // - emit an ItemCreated() event
    function createItem(string memory _name, string memory _description, uint256 _price) public {
        itemCount++;
        items[itemCount] = Item(itemCount, _name, _description, _price, msg.sender, true);
        emit ItemCreated(itemCount, _name, _description, _price, msg.sender);
    }

    // suppose a user wants to purchase this item...
    // - does the item exist?
    // - is the item available??
    // - does the user have enough money???
    // if all requirements are met, continue with the function
    function purchaseItem(uint256 _id) public payable {
        require(_id <= itemCount, "Invalid item ID");
        Item storage item = items[_id];
        require(item.isAvailable, "Item is not available for purchase");
        require(msg.value >= item.price, "Insufficient funds sent");

        item.isAvailable = false;
        payable(item.seller).transfer(msg.value);

        emit ItemPurchased(_id, msg.sender);
    }
}