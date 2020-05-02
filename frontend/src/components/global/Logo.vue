<template>
  <div class="d-flex">
    <h2 class="text-italic" v-html="`AÇ<b>AI</b>`" />
    <span class="material-icons" v-html="`restaurant_menu`" />
  </div>
</template>

<style lang="scss" scoped>
h2 {
  background: -webkit-linear-gradient(270deg, rgb(175, 32, 175), rgb(77, 1, 77));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.material-icons {
  font-size: 1.3rem;
  transform: rotate(15deg);
  position: relative;
  top: .2rem;
  left: -.6rem;

  background: -webkit-linear-gradient(200deg, rgb(175, 32, 175), rgb(77, 1, 77));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>