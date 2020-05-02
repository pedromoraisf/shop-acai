<template>
  <b-row>
    <b-col class="pt-5 px-4 bg-transparent" cols="12" md="6" v-for="(o, i) in orders" :key="o.id">
      <div class="shadow-ghost big-rounded">
        <b-row class="align-items-center">
          <!-- photo -->
          <b-col cols="12" md="4" class="p-3 p-md-0 p-lg-0 p-xl-0">
            <img class="img-fluid" :src="require(`@/assets/images/acai.png`)" />
          </b-col>

          <!-- desc -->
          <b-col cols="12" md="7" class="pb-5 pb-md-0 pb-lg-0 pb-xl-0 px-5 px-md-0 px-lg-0 px-xl-0">
            <div class="d-flex justify-content-between">
              <!-- n -->
              <h5 v-html="`Pedido #${(i + 1)}`" />

              <!-- time -->
              <span class="tempo-preparo text-left">
                <span class="material-icons" v-html="`query_builder`" />
                {{ o.tempoPreparo }}
              </span>
            </div>

            <!-- infos -->
            <p class="infos">{{ o.sabor | saborFilter }}, {{ o.tamanho | tamanhoFilter }}</p>

            <!-- price -->
            <p class="font-weight-bold d-flex" v-html="$options.filters.precoFilter(o.valorTotal)" />
          </b-col>
        </b-row>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { mapState } from "vuex";

import saborFilter from "@/js/filters/sabor.js";
import tamanhoFilter from "@/js/filters/tamanho.js";
import precoFilter from "@/js/filters/preco.js";

export default {
  computed: {
    ...mapState(["orders"])
  },
  filters: {
    saborFilter,
    tamanhoFilter, 
    precoFilter
  }
};
</script>

<style lang="scss" scoped>
.tempo-preparo {
  font-size: 0.9rem;
  color: grey;

  & .material-icons {
    font-size: 0.9rem;
    position: relative;
    top: 2px;
  }
}

.infos {
  font-size: .9rem;
}
</style>