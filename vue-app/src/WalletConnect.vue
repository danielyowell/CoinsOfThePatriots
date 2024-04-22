<template>
    <div>
      <button @click="connectWallet" :disabled="isConnected">
        {{ isConnected ? 'Connected' : 'Connect Wallet' }}
      </button>
    </div>
</template>

<script>
import Web3 from 'web3';
import Web3Modal from 'web3modal';

export default {
  name: 'WalletConnect',
  data() {
    return {
      web3: null,
      provider: null,
      isConnected: false,
    };
  },
  methods: {
    async connectWallet() {
      try {
        const providerOptions = {};
        const web3Modal = new Web3Modal({
          network: 'mainnet', // Optional. If using Ethereum MainNet
          cacheProvider: true, // Optional. Enable provider caching.
        });

        this.provider = await web3Modal.connect();
        this.web3 = new Web3(this.provider);
        this.isConnected = true;

        // Subscribe to provider events for reloading when user changes account
        this.provider.on('accountsChanged', async (accounts) => {
          await this.updateAccounts(accounts);
        });
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    },
    async updateAccounts(accounts) {
      if (accounts.length === 0) {
        this.isConnected = false;
      } else {
        // Set the new account
        this.web3.eth.defaultAccount = accounts[0];
      }
    },
  },
};
</script>