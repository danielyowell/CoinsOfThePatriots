<script setup>
//import "subpage.css";
</script>

<template>
    <backbutton>
        <a href="#/" rel="noopener">Back</a>
    </backbutton>
    <center>
        <outerworld>

            <br>
            <mybox>Connect Wallet</mybox>
            <br>
            <mybox2>Enter your wallet address below:</mybox2>
            <br>
            <form action="/action_page.php">
                <label for="fname"></label>
                <input type="text" id="fname" name="fname" size="50" placeholder="ex: mjHaH7XpM9BFoCK3oSB95iiNRHLHFDANie"><br>
                <!-- <input v-model="message" size="50" placeholder="ex: mjHaH7XpM9BFoCK3oSB95iiNRHLHFDANie" /> -->
                <input type="submit" value="Submit">
            </form>
        </outerworld>

    </center>


</template>

<style scoped>

outerworld {
    text-align: center;
}

backbutton {
    text-align: center;
}

mybox {
    font-size: 30px;
}

mybox2 {
    font-size: 20px;
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
