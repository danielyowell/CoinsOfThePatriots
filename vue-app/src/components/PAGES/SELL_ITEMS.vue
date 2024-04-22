<template>
    <div>
      <h2>Create New Item</h2>
      <form @submit.prevent="createItem">
        <div>
          <label for="name">Item Name:</label>
          <input type="text" id="name" v-model="itemName" required>
        </div>
        <div>
          <label for="price">Price (in ETH):</label>
          <input type="number" id="price" v-model.number="itemPrice" step="0.000000000000000001" required>
        </div>
        <button type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? 'Creating...' : 'Create Item' }}
        </button>
      </form>
      <p v-if="createdItemId">Item created with ID: {{ createdItemId }}</p>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
</template>
  
<script>
import Web3 from 'web3';
//import ItemMarketplace from './mycontract.sol';

export default {
name: 'CreateItem',
data() {
    return {
    itemName: '',
    itemPrice: null,
    isSubmitting: false,
    createdItemId: null,
    error: null,
    web3: null,
    contract: null,
    };
},
async mounted() {
    // Connect to Ethereum network
    this.web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: 'eth_requestAccounts' });

    // Create contract instance
    const networkId = await this.web3.eth.net.getId();
    const contractAddress = ItemMarketplace.networks[networkId].address;
    this.contract = new this.web3.eth.Contract(
      ItemMarketplace.abi,
    contractAddress
    );
},
methods: {
    async createItem() {
    try {
        this.isSubmitting = true;
        this.error = null;
        this.createdItemId = null;

        const accounts = await this.web3.eth.getAccounts();
        const priceInWei = this.web3.utils.toWei(this.itemPrice.toString(), 'ether');

        const result = await this.contract.methods
        .createItem(this.itemName, priceInWei)
        .send({ from: accounts[0] });

        if (result.events.ItemCreated) {
        this.createdItemId = result.events.ItemCreated.returnValues.id;
        }
    } catch (err) {
        console.error(err);
        this.error = 'Error creating item';
    } finally {
        this.isSubmitting = false;
    }
    },
},
};
</script>