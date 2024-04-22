<script setup>
//import "subpage.css";

import Web3 from 'web3';
//import ItemMarketplaceContract from '../contracts/ItemMarketplace.json';
</script>

<template>
    <backbutton>
        <a href="#/" rel="noopener">Back</a>
    </backbutton>
    <center>
        <outerworld>
            <br>
            <mybox>Sell Items</mybox>
            <br>
            <mybox2>Fill out the information below to list an item on the market:</mybox2>
            <br>
            <form @submit.prevent="createItem">
                <div>
                    <label for="name">Item Name:</label>
                    <input type="text" id="name" v-model="itemName" required>
                </div>
                <div>
                    <label for="description">Description:</label>
                    <input type="text" id="description" v-model="itemName" required>
                </div>
                <div>
                    <label for="price">Price (in ETH):</label>
                    <input type="number" id="price" v-model.number="itemPrice" step="0.000000000000000001" required>
                </div>
                <button type="submit" :disabled="isSubmitting">
                    {{ isSubmitting ? 'Creating...' : 'Create Item' }}
                </button>
            </form>
        </outerworld>
    </center>
</template>

<style>
outerworld {
    text-align: center;
}

backbutton {
    text-align: center;
}

mybox {
    font-size: 30px;
    font-weight: 450;
    color: aliceblue;
    /* provisional */
}

mybox2 {
    font-size: 20px;
}

ctr {
    text-align: center;
}

header {
    line-height: 1.5;
}

body {
    min-height: 100vh;
    color: var(--color-text);
    background: var(--color-background);
    line-height: 1.6;
    font-family:
        Inter,
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        Oxygen,
        Ubuntu,
        Cantarell,
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        sans-serif;
    font-size: 15px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
