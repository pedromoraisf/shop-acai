<template>
  <div id="app">
    <navigation />
    <router-view />
    <add-order />
  </div>
</template>

<script>
import Navigation from "@/components/global/Navigation";
import AddOrder from "@/components/global/AddOrder";

export default {
  components: {
    AddOrder,
    Navigation
  }
}
</script>
