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
            <mybox>Sell Items</mybox>
            <br>
            <mybox2>Fill out the information below to list an item on the market:</mybox2>
            <br>
            
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
    font-weight:450;
    color: aliceblue; /* provisional */
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
