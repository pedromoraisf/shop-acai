<template>
  <vs-dialog prevent-close auto-width not-close blur v-model="showAddOrder">
    <template #header>
      <div class="w-100 p-4 text-left">
        <h3 class="not-margin font-weight-bolder">
          Realizar Pedido
        </h3>
      </div>
    </template>

    <div class="con-form">
      
    </div>

    <template #footer>
      
    </template>
  </vs-dialog>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data: () => ({
    input1: '',
    input2: '',
    checkbox1: false
  }),
  computed: {
    ...mapState(["showAddOrder"])
  },
  methods: {
    ...mapActions(["commitShowAddOrder"])
  }
}
</script>

<style scoped>
.con-form {
  width: 900px;
  max-width: 100%;
}
</style>