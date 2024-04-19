/*
Boss, web3 is a whole different beast from what you're used to.

Prereqs:
First install npm
mkdir SimpleBank
cd SimpleBank
npm init -y
npm install web3
*/

const Web3 = require('web3');

// Configuration
const web3 = new Web3('https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID');
const account = 'YOUR_ACCOUNT_ADDRESS';
const privateKey = 'YOUR_PRIVATE_KEY'; // Be cautious with your private key
const simpleBankContractAddress = 'SIMPLE_BANK_CONTRACT_ADDRESS';
const simpleBankABI = [
    // Simplified ABI with only the methods we'll interact with
    {
        "constant": false,
        "inputs": [],
        "name": "deposit",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{"name": "withdrawAmount", "type": "uint256"}],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

async function depositEther(amount) {
    const simpleBank = new web3.eth.Contract(simpleBankABI, simpleBankContractAddress);
    const transaction = simpleBank.methods.deposit();
    const options = {
        to: transaction._parent._address,
        data: transaction.encodeABI(),
        gas: await transaction.estimateGas({from: account}),
        gasPrice: await web3.eth.getGasPrice(),
        value: web3.utils.toWei(amount.toString(), 'ether')
    };

    const signed = await web3.eth.accounts.signTransaction(options, privateKey);
    const receipt = await web3.eth.sendSignedTransaction(signed.rawTransaction);
    console.log('Transaction receipt:', receipt);
}

async function withdrawEther(amount) {
    const simpleBank = new web3.eth.Contract(simpleBankABI, simpleBankContractAddress);
    const transaction = simpleBank.methods.withdraw(web3.utils.toWei(amount.toString(), 'ether'));
    const options = {
        to: transaction._parent._address,
        data: transaction.encodeABI(),
        gas: await transaction.estimateGas({from: account}),
        gasPrice: await web3.eth.getGasPrice(),
    };

    const signed = await web3.eth.accounts.signTransaction(options, privateKey);
    const receipt = await web3.eth.sendSignedTransaction(signed.rawTransaction);
    console.log('Transaction receipt:', receipt);
}

// Example usage
depositEther(0.01).then(() => withdrawEther(0.01));