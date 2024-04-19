<script setup>
import OPTION_ITEM from './OPTION_ITEM.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import CONNECT_WALLET from './PAGES/CONNECT_WALLET.vue'
import SELL_ITEMS from './PAGES/SELL_ITEMS.vue'
import oops from './PAGES/oops.vue'
</script>

<template>

  <OPTION_ITEM>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Connect ETH Wallet</template>

    Click  
    <a href="#/connect_wallet" rel="noopener">here</a> to connect your ETH wallet.
  </OPTION_ITEM>

  <OPTION_ITEM>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Sell Items</template>

    Click  
    <a href="#/sell_items" rel="noopener">here</a> to sell items.
  </OPTION_ITEM>

  <OPTION_ITEM>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Purchase Items</template>

    Click  
    <a href="#/purchase_items" rel="noopener">here</a> to purchase items.
  </OPTION_ITEM>

</template>
