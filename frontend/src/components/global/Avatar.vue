<template>
  <vs-tooltip light bottom>
    <vs-avatar class="shadow-ghost" size="40" history color="#eee">
      <span class="material-icons" v-html="`person`" />
    </vs-avatar>

    <template #tooltip>
      Apenas demonstração
    </template>
  </vs-tooltip>
</template>

<style lang="scss" scoped>
.material-icons {
  font-size: 1rem;
  color: #656565;
}
</style>