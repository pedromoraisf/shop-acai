<template>
  <nav class="w-100 border-bottom">
    <b-container class="py-4 d-flex align-items-center justify-content-between">
      <!-- logo -->
      <logo />

      <!-- search component -->
      <search />

      <!-- user navigation -->
      <vs-button
        color="slack"
        class="px-3 py-1 outline-none"
      >Realizar Pedido</vs-button>
    </b-container>
  </nav>
</template>

<script>
import Logo from "@/components/global/Logo";
import Search from "@/components/global/Search";

export default {
  components: {
    Logo,
    Search
  }
};
</script>

<style scoped>
</style>