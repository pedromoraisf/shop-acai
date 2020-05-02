<template>
  <div>
    <b-container>
      <b-row v-if="orders.length">
        <b-col cols="12" md="6">

        </b-col>
      </b-row>

      <div class="p-5 text-center" v-else-if="!orders.length">
        <p class="mb-0" v-html="`Nenhum pedido realizado`" />
        <b-button variant="link" v-html="`Realizar um agora →`" />
      </div>
    </b-container>
  </div>
</template>

<script>
import getOrdersDTO from "@/services/dto/get-orders.js";

export default {
  data: () => ({
    orders: ""
  }),
  methods: {
    getOrdersDTO
  }, 
  async created() {
    const { r } = await this.getOrdersDTO();
    this.orders = r;
  }
}
</script>