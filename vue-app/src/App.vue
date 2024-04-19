<script setup>
import { ref, computed } from 'vue'
import TITLE_SUBHEADING from './components/TITLE_SUBHEADING.vue'
import OPTIONS from './components/OPTIONS.vue'
import HOME from './HOME.vue'
import CONNECT_WALLET from './components/PAGES/CONNECT_WALLET.vue';
import SELL_ITEMS from './components/PAGES/SELL_ITEMS.vue';
import PURCHASE_ITEMS from './components/PAGES/PURCHASE_ITEMS.vue';
import Web3 from 'web3';

const routes = {
  '/': HOME,
  '/connect_wallet': CONNECT_WALLET,
  '/sell_items': SELL_ITEMS,
  '/purchase_items': PURCHASE_ITEMS
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || oops
})

</script>

<template>
  <component :is="currentView" />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
