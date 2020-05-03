<template>
  <div class="adicionar-pedido shadow-lg animated fadeIn faster" v-if="showAddOrder">
    <b-container class="p-4 p-sm-5 p-md-5 p-lg-5 p-xl-5">
      <div class="sub-container">
        <!-- "page" header -->
        <header class="header text-center position-relative">
          <h3>Adicionar Pedido</h3>

          <button
            @click.prevent="commitShowAddOrder(!showAddOrder)"
            class="bg-transparent border-0 outline-none h-100"
          >
            <span class="material-icons align-bottom" v-html="`keyboard_arrow_down`" />
          </button>
        </header>

        <!-- product intro -->
        <section class="text-center section">
          <img class="img-fluid" :src="require(`@/assets/images/acai.png`)" />
        </section>

        <!-- product infos -->
        <section class="section">
          <!-- SABOR -->
          <div class="mt-4 animated fadeIn faster">
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
          <div class="mt-4 animated fadeIn faster" v-if="acai.sabor !== ''">
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
            <div>
              <vs-radio
                class="justify-content-start px-3 pt-3"
                v-model="acai.tamanho"
                v-for="t in tamanhoOpcoes"
                color="slack"
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
          <div class="mt-4 animated fadeIn faster security-padding" v-if="acai.tamanho !== ''">
            <div class="p-3 bg-light rounded d-flex justify-content-between align-items-start">
              <div class="d-flex flex-column">
                <span v-html="`Personalize seu pedido`" />
                <span
                  v-html="`<b>${acai.personalizacoes.length}</b> de <b>${personalizacoesOpcoes.length}</b>`"
                />
              </div>

              <span
                class="badge badge-dark shadow-ghost d-flex align-items-center p-2"
                v-html="`Não Obrigatório`"
              />
            </div>
            <div class="pb-3">
              <vs-checkbox
                class="px-3"
                color="slack"
                v-for="p in personalizacoesOpcoes"
                :key="p.id"
                :val="p.id"
                v-model="acai.personalizacoes"
              >{{ p.descricao }}</vs-checkbox>
            </div>
          </div>
        </section>
      </div>
    </b-container>

    <!-- product overview -->
    <footer
      class="footer bg-white shadow pb-2 pt-4 animated fadeIn faster"
      v-if="acai.sabor !== '' && acai.tamanho !== ''"
    >
      <b-container>
        <div class="sub-container">
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
        </div>
      </b-container>
    </footer>
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

      this.personalizacoesOpcoes.forEach(p => {
        self.acai.personalizacoes.forEach(aP => {
          if ((aP === p.id) && p.valor)
            valorTotal = valorTotal + p.valor;
        });
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

      this.personalizacoesOpcoes.forEach(p => {
        self.acai.personalizacoes.forEach(aP => {
          if ((aP === p.id) && p.tempoPreparo)
            tempoPreparo = tempoPreparo + p.tempoPreparo;
        });
      });

      return tempoPreparo ? `${tempoPreparo}min` : ``;
    }
  },
  methods: {
    ...mapActions(["commitShowAddOrder", "commitPushOrdersChange"]),
    setOrderDTO,
    openNotification(position = null, color, title, text) {
      this.$vs.notification({
        position,
        color,
        title,
        text
      });
    },
    async finalizarPedido() {
      this.loadButton = true;

      this.acai.valorTotal = this.valorTotal;
      this.acai.tempoPreparo = this.tempoPreparo;

      try {
        const res = await setOrderDTO(this.acai);
        if (res.status === 200) {
          const tempoPreparo = this.acai.tempoPreparo;

          this.commitPushOrdersChange(this.acai);
          this.commitShowAddOrder(!this.showAddOrder);

          this.openNotification(
            "top-center",
            "success",
            "Pedido feito com sucesso!",
            `Em aproximadamente ${tempoPreparo} seu açaí estara pronto 😁`
          );
        } else {
          this.openNotification(
            "top-center",
            "danger",
            "Ocorreu algum erro...",
            "Por favor, tente novamente 🥶"
          );
        }
      } catch {
        this.openNotification(
          "top-center",
          "danger",
          "Ocorreu algum erro...",
          "Por favor, tente novamente 🥶"
        );
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

<style lang="scss">
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

.header {
  & button {
    position: absolute;
    top: 0;
    right: 0;
  }
}

.section {
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

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 20;
}

.security-padding {
  padding-bottom: 6rem;
}

.vs-checkbox-label {
  position: relative;
  top: 5px;
}
</style>