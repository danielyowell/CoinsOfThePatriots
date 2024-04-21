<script setup>
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
</script>

<template>
    <div>
        <button @click="getLatestBlockNumber">Get Latest Block Number</button>
        <p>Latest Block Number: {{ latestBlockNumber }}</p>
        <button @click="getLatestBlockNumber">Get Latest Block Number</button>
        <p>Latest Block Number: {{ latestBlockNumber }}</p>
    </div>
</template>

<script>
import Web3 from 'web3';

const web3 = new Web3('https://sepolia.infura.io/v3/4fa3f4bc1fb64adeb53218145f8964c1');

export default {
    data() {
        return {
            latestBlockNumber: null,
        };
    },
    methods: {
        getLatestBlockNumber() {
            web3.eth.getBlockNumber()
                .then(blockNumber => {
                    this.latestBlockNumber = blockNumber;
                })
                .catch(error => {
                    console.error('Error getting block number:', error);
                });
        },
    },
};
</script>