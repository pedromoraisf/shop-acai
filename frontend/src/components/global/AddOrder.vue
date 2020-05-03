<template>
  <div class="adicionar-pedido shadow-lg animated fadeIn faster" v-if="showAddOrder">
    <b-container class="p-4 p-sm-5 p-md-5 p-lg-5 p-xl-5">
      <div class="sub-container">
        <!-- "page" header -->
        <header class="text-center position-relative">
          <h3>Adicionar Pedido</h3>

          <button
            @click.prevent="commitShowAddOrder(!showAddOrder)"
            class="bg-transparent border-0 outline-none h-100"
          >
            <span class="material-icons align-bottom" v-html="`keyboard_arrow_down`" />
          </button>
        </header>

        <!-- product intro -->
        <section class="text-center">
          <img class="img-fluid" :src="require(`@/assets/images/acai.png`)" />
        </section>

        <!-- product infos -->
        <section>
          <!-- SABOR -->
          <div class="mt-3">
            <div class="p-3 bg-light rounded d-flex justify-content-between align-items-start">
              <div class="d-flex flex-column">
                <span v-html="`Selecione o sabor`" />
                <span v-html="acai.sabor === '' ? `<b>0</b> de <b>1</b>` : `<b>1</b> de <b>1</b>`" />
              </div>

              <span
                class="badge badge-light shadow-ghost d-flex align-items-center p-2"
                v-html="`Obrigatório`"
              />
            </div>
            <div class="pb-3">
              <vs-radio
                class="justify-content-start px-3 pt-3"
                :color="s.cor"
                v-model="acai.sabor"
                v-for="s in saborOpcoes"
                :key="s.id"
                :val="s.id"
              >
                {{ s.descricao }}
                <template #icon>
                  <span style="font-size: .8rem !important;">{{ s.descricao[0] }}</span>
                </template>
              </vs-radio>
            </div>
          </div>

          <!-- TAMANHO -->
          <div class="mt-3" v-if="acai.sabor !== ''">
            <div class="p-3 bg-light rounded d-flex justify-content-between align-items-start">
              <div class="d-flex flex-column">
                <span v-html="`Selecione o tamanho`" />
                <span
                  v-html="acai.tamanho === '' ? `<b>0</b> de <b>1</b>` : `<b>1</b> de <b>1</b>`"
                />
              </div>

              <span
                class="badge badge-light shadow-ghost d-flex align-items-center p-2"
                v-html="`Obrigatório`"
              />
            </div>
            <div class="pb-3">
              <vs-radio
                class="justify-content-start px-3 pt-3"
                v-model="acai.tamanho"
                v-for="t in tamanhoOpcoes"
                :key="t.id"
                :val="t.id"
              >
                {{ t.descricao }}
                <template #icon>
                  <span style="font-size: .8rem !important;">{{ t.descricao[0] }}</span>
                </template>
              </vs-radio>
            </div>
          </div>

          <!-- PERSONALIZAÇÕES -->
          <!-- <div class="mt-3" v-if="acai.tamanho !== ''">
            <div class="p-3 bg-light rounded d-flex justify-content-between align-items-start">
              <div class="d-flex flex-column">
                <span v-html="`Selecione o tamanho`" />
                <span v-html="acai.tamanho === '' ? `<b>0</b> de <b>1</b>` : `<b>1</b> de <b>1</b>`" />
              </div>

              <span class="badge badge-light shadow-ghost d-flex align-items-center p-2" v-html="`Não Obrigatório`" />
            </div>
            <div class="pb-3">
              <vs-radio class="justify-content-start px-3 pt-3" v-model="acai.tamanho" v-for="t in tamanhoOpcoes" :key="t.id" :val="t.id">
                {{ t.descricao }}
                <template #icon>
                  <span style="font-size: .8rem !important;">{{ t.descricao[0] }}</span>
                </template>
              </vs-radio>
            </div>
          </div>-->
        </section>

        <!-- product overview -->
        <footer class="mt-5" v-if="acai.sabor !== '' && acai.tamanho !== ''">
          <div class="d-flex justify-content-between align-items-center">
            <span
              class="font-weight-bold d-flex mb-0"
              v-html="$options.filters.precoFilter(valorTotal)"
            />

            <span class="tempo-preparo text-left">
              <span class="material-icons" v-html="`query_builder`" />
              {{ tempoPreparo }}
            </span>
          </div>

          <div>
            <vs-button
              :loading="loadButton"
              block
              floating
              color="slack"
              class="px-3 py-1 outline-none"
              @click.prevent="finalizarPedido()"
            >
              <b>Finalizar Pedido</b>
            </vs-button>
          </div>
        </footer>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import definicaoAcai from "@/_patterns/acai.js";
import setOrderDTO from "@/services/dto/set-order.js";

import saborFilter from "@/js/filters/sabor.js";
import tamanhoFilter from "@/js/filters/tamanho.js";
import precoFilter from "@/js/filters/preco.js";

export default {
  data: () => ({
    acai: definicaoAcai.acai,
    tamanhoOpcoes: definicaoAcai.tamanhoOpcoes,
    saborOpcoes: definicaoAcai.saborOpcoes,
    personalizacoesOpcoes: definicaoAcai.personalizacoesOpcoes,
    loadButton: false
  }),
  computed: {
    ...mapState(["showAddOrder"]),
    valorTotal() {
      const self = this;
      let valorTotal = "";

      this.tamanhoOpcoes.forEach(t => {
        if (self.acai.tamanho === t.id) valorTotal = t.valor;
      });

      return valorTotal.toString();
    },
    tempoPreparo() {
      const self = this;
      let tempoPreparo = 0;

      this.saborOpcoes.forEach(s => {
        if (self.acai.sabor === s.id && s.tempoPreparo)
          tempoPreparo = tempoPreparo + s.tempoPreparo;
      });

      this.tamanhoOpcoes.forEach(t => {
        if (self.acai.tamanho === t.id)
          tempoPreparo = tempoPreparo + t.tempoPreparo;
      });

      return tempoPreparo ? `${tempoPreparo}min` : ``;
    }
  },
  methods: {
    ...mapActions(["commitShowAddOrder"]),
    setOrderDTO,
    async finalizarPedido() {
      this.loadButton = true;

      this.acai.valorTotal = this.valorTotal;
      this.acai.tempoPreparo = this.tempoPreparo;

      try {

        const res = await setOrderDTO(this.acai);
        console.log(res);

      } catch (e) {
        console.log(e);
      }

      this.loadButton = false;
    }
  },
  filters: {
    saborFilter,
    tamanhoFilter,
    precoFilter
  }
};
</script>

<style lang="scss" scoped>
.sub-container {
  max-width: 580px;
  width: 100%;
  margin: 0 auto;
}

.adicionar-pedido {
  position: fixed;
  top: 25px;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 10;
  border-radius: 3rem;
  overflow-y: scroll;
  padding-bottom: 5rem;
}

header {
  & button {
    position: absolute;
    top: 0;
    right: 0;
  }
}

section {
  & img {
    max-width: 300px;
  }
}

.tempo-preparo {
  font-size: 0.9rem;
  color: grey;

  & .material-icons {
    font-size: 0.9rem;
    position: relative;
    top: 2px;
  }
}
</style>