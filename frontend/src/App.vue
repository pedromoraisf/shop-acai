<template>
  <div id="app">
    <navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/global/Navigation";

export default {
  components: {
    Navigation
  }
}
</script>
