<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12" md="6">

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import getOrdersDTO from "@/services/dto/get-orders.js";

export default {
  methods: {
    getOrdersDTO
  }, 
  created() {
    this.getOrdersDTO();
  }
}
</script>