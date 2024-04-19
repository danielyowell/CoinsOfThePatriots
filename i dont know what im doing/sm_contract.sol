// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// SimpleBank contract definition
contract SimpleBank {
    // Mapping from addresses to balances
    mapping(address => uint) private balances;
    
    // Event declarations
    event DepositMade(address indexed accountAddress, uint amount);
    event WithdrawalMade(address indexed accountAddress, uint withdrawAmount, uint newBalance);

    // Deposit function allows users to deposit Ether into the bank
    function deposit() public payable {
        require(msg.value > 0, "Deposit amount must be greater than zero.");
        balances[msg.sender] += msg.value;
        emit DepositMade(msg.sender, msg.value);
    }

    // Withdraw function allows users to withdraw Ether from the bank
    function withdraw(uint withdrawAmount) public {
        require(withdrawAmount <= balances[msg.sender], "Insufficient balance.");
        payable(msg.sender).transfer(withdrawAmount);
        balances[msg.sender] -= withdrawAmount;
        emit WithdrawalMade(msg.sender, withdrawAmount, balances[msg.sender]);
    }

    // Get balance function returns the Ether balance of the user
    function getBalance() public view returns (uint) {
        return balances[msg.sender];
    }
}