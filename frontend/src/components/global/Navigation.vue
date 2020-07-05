<template>
  <nav class="w-100 border-bottom">
    <b-container class="py-4 d-flex align-items-center justify-content-between">
      <!-- logo -->
      <logo />

      <!-- search component -->
      <search class="d-none d-sm-none d-md-inline-block d-lg-inline-block d-xl-inline-block" />

      <!-- user navigation -->
      <vs-button color="slack" class="px-3 py-1 outline-none" @click.prevent="commitShowAddOrder(!showAddOrder)">Realizar Pedido</vs-button>
    </b-container>
  </nav>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Logo from "@/components/global/Logo";
import Search from "@/components/global/Search";

export default {
  components: {
    Logo,
    Search
  },
  data: () => ({
    active: false
  }),
  computed: {
    ...mapState(["showAddOrder"])
  },
  methods: {
    ...mapActions(["commitShowAddOrder"])
  }
};
</script>

<style scoped>
</style>