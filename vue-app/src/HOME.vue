<script setup>
import TITLE_SUBHEADING from './components/TITLE_SUBHEADING.vue'
import OPTIONS from './components/OPTIONS.vue'
import Web3 from 'web3';
import BalanceComponent from './components/BalanceComponent.vue';
import WalletConnect from './WalletConnect.vue';

// export default?
{
  components: {
    BalanceComponent
  }
};

//const web3 = new Web3('https://mainnet.infura.io/v3/4fa3f4bc1fb64adeb53218145f8964c1');
const web3 = new Web3('https://sepolia.infura.io/v3/4fa3f4bc1fb64adeb53218145f8964c1');
const my_address = '0x118b0C278e7727C387361B2AdB83a150D711227e';
//const address = "(No wallet currently connected)";


</script>

<template>
    <ctr>
        <header>
            <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
            <br><br>
            <div class="wrapper">
                <ctr>
                    <!-- <TITLE_SUBHEADING msg="COINSOFT" /> -->
                </ctr>

            </div>
        </header>
    </ctr>


    <main>
        <OPTIONS />
    </main>

    <ctr>
        <div>
            <!-- <BalanceComponent /> -->
            <WalletConnect />
        </div>
        <!-- {{ address }} -->
    </ctr>

</template>

<script>
export default {
  components: {
    WalletConnect,
  },
};
</script>

<style>
ctr {
    text-align: center;
}
</style>