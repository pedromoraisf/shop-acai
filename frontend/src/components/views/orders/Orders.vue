<template>
  <b-row class="pb-5">
    <b-col class="pt-5 px-4 bg-transparent" cols="12" md="6" v-for="(o, i) in orders" :key="o.id">
      <div class="shadow-ghost big-rounded">
        <b-row class="align-items-center py-5">
          <!-- photo -->
          <b-col cols="5" md="4">
            <img class="img-fluid" :src="require(`@/assets/images/acai.png`)" />
          </b-col>

          <!-- desc -->
          <b-col cols="7" md="7" class="pr-5 pr-md-0 pr-lg-0 pr-xl-0">
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
            <p
              class="font-weight-bold d-flex mb-0"
              v-html="$options.filters.precoFilter(o.valorTotal)"
            />

            <vs-button
              v-if="o.personalizacoes.length"
              :active="showDetails === i"
              :color="showDetails !== i ? `dark` : `dribbble`"
              class="outline-none m-0"
              floating
              @click.prevent="showDetails !== i ?  showDetails = i :  showDetails = false"
            >{{ showDetails !== i ? `Ver detalhes` : `Fechar detalhes` }}</vs-button>

            <div
              v-if="showDetails === i"
              class="detalhes animated fadeIn py-2 px-3 bg-light mt-2 big-rounded text-secondary"
            >
              <span
                v-for="(p, y) in o.personalizacoes"
                :key="p.id"
                v-html="y === (o.personalizacoes.length - 1) ? p.descricao : `${p.descricao}, `"
              />
            </div>
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
  data: () => ({
    showDetails: false
  }),
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
  font-size: 0.9rem;
}

.detalhes {
  font-size: 0.8rem;
}
</style>