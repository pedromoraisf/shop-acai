<template>
  <div>
    <b-container>
      <orders v-if="orders.length" />
      <no-orders v-else-if="!orders.length" />
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import getOrdersDTO from "@/services/dto/get-orders.js";

import Orders from "@/components/views/orders/Orders";
import NoOrders from "@/components/views/orders/NoOrders";

export default {
  components: {
    Orders,
    NoOrders
  },
  methods: {
    ...mapActions(["commitOrdersChange"]),
    getOrdersDTO
  }, 
  computed: {
    ...mapState(["orders"])
  },
  async mounted() {
    const { r } = await this.getOrdersDTO();
    this.commitOrdersChange(r);
  }
}
</script>