<!-- BalanceComponent.vue -->

<template>
  <div>
    <button @click="getLatestBlockNumber">Get Latest Block Number</button>
    <p>Latest Block Number: {{ latestBlockNumber }}</p>
  </div>
</template>

<script>
import Web3 from 'web3';

// Create a new Web3 instance
const web3 = new Web3('https://sepolia.infura.io/v3/4fa3f4bc1fb64adeb53218145f8964c1');

// Get the latest block number
web3.eth.getBlockNumber()
  .then(blockNumber => {
    console.log('Latest block number:', blockNumber);
  })
  .catch(error => {
    console.error('Error getting block number:', error);
  });

// export default {
//   data() {
//     return {
//       balance: null
//     };
//   },
//   methods: {
//     async getBalance() {
//       try {
//         const address = '0x118b0C278e7727C387361B2AdB83a150D711227e'; // Replace with the user's Ethereum address
//         // const balance = await this.$web3.eth.getBalance(address);
//         // this.balance = this.$web3.utils.fromWei(balance, 'ether');
//         console.log("heyo!!!");
//       } catch (error) {
//         console.error('Error fetching balance..:', error);
//       }
//     }
//   }
// };
</script>

<style scoped>
/* Add any component-specific styles here */
</style>