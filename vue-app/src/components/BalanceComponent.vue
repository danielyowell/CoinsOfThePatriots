<!-- BalanceComponent.vue -->

<template>
  <div>
    <button @click="getBalance">Get Balance!!</button>
    <div v-if="balance !== null">
      Balance: {{ balance }} ETH!
    </div>
  </div>
</template>

<script>
import Web3 from 'web3';

export default {
  data() {
    return {
      balance: null
    };
  },
  methods: {
    async getBalance() {
      try {
        const address = '0x118b0C278e7727C387361B2AdB83a150D711227e'; // Replace with the user's Ethereum address
        // const balance = await this.$web3.eth.getBalance(address);
        // this.balance = this.$web3.utils.fromWei(balance, 'ether');
        console.log("heyo!!!");
      } catch (error) {
        console.error('Error fetching balance..:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>