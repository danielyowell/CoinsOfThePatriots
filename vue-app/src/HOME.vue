<script setup>
import TITLE_SUBHEADING from './components/TITLE_SUBHEADING.vue'
import OPTIONS from './components/OPTIONS.vue'
import Web3 from 'web3';
import BalanceComponent from './components/BalanceComponent.vue';

// export default?
{
  components: {
    BalanceComponent
  }
};

//const web3 = new Web3('https://mainnet.infura.io/v3/4fa3f4bc1fb64adeb53218145f8964c1');
const web3 = new Web3('https://sepolia.infura.io/v3/4fa3f4bc1fb64adeb53218145f8964c1');
const my_address = '0x118b0C278e7727C387361B2AdB83a150D711227e';
const address = "(No wallet currently connected)";


</script>

<template>
    <center>
        <header>
            <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
            <br><br>
            <div class="wrapper">
                <center>
                    <!-- <TITLE_SUBHEADING msg="COINSOFT" /> -->
                </center>

            </div>
        </header>
    </center>


    <main>
        <OPTIONS />
    </main>

    <center>
        <div>
            <BalanceComponent />
        </div>
        {{ address }}
    </center>

</template>

<style></style>