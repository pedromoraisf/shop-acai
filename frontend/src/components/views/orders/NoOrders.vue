<template>
  <div class="p-5 text-center animated fadeIn">
    <p class="mb-0" v-html="`Nenhum pedido realizado`" />
    <b-button variant="link" v-html="`Realizar um agora →`" @click.prevent="commitShowAddOrder(!showAddOrder)" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["showAddOrder"])
  },
  methods: {
    ...mapActions(["commitShowAddOrder"])
  }
}
</script>