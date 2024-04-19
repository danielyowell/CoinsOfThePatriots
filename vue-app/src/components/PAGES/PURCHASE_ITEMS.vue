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
            <mybox>Purchase Items</mybox>
            <br>
            <mybox2>The following items are available for purchase:</mybox2>
            <br>
        </outerworld>
    </center>


</template>

<style scoped>
mybox {
    font-size: 30px;
}

mybox2 {
    font-size: 20px;
}

outerworld {
    text-align: center;
}

backbutton {
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
