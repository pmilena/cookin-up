<script lang="ts">
import MostrarReceita from "./MostrarReceita.vue";
import SelecionarIngredientes from "./SelecionarIngredientes.vue";
import SuaLista from "./SuaLista.vue";

type Pagina = "SelecionarIngredientes" | "MostrarReceitas";

export default {
  components: { SelecionarIngredientes, SuaLista, MostrarReceita },
  data() {
    return {
      ingredientes: [] as string[],
      conteudo: "SelecionarIngredientes" as Pagina,
    };
  },
  methods: {
    adicionarIngrediente(ingrediente: string) {
      this.ingredientes.push(ingrediente);
    },
    removerDaLista(ingrediente: string) {
      this.ingredientes = this.ingredientes.filter(
        (iLista) => ingrediente !== iLista
      );
    },
    mostrarReceita(pagina: Pagina) {
      this.conteudo = "MostrarReceitas";
    },
    editarReceitas(pagina: Pagina) {
      this.conteudo = "SelecionarIngredientes";
    },
  },
};
</script>

<template>
  <main class="conteudo-principal">
    <SuaLista :ingredientes="ingredientes" />

    <KeepAlive include="SelecionarIngredientes">
      <SelecionarIngredientes
        v-if="conteudo === 'SelecionarIngredientes'"
        @adicionar-ingrediente="adicionarIngrediente"
        @remover-da-lista="removerDaLista"
        @mostrar-receita="mostrarReceita"
      />
      <MostrarReceita
        v-else-if="conteudo === 'MostrarReceitas'"
        @editar-receitas="editarReceitas"
        :ingredientes="ingredientes"
      />
    </KeepAlive>
  </main>
</template>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #fffaf3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>
