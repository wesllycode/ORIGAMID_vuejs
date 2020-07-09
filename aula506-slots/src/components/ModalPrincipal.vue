<template>
  <div class="modal">
      <slot name="top"></slot>        
        <h1>Esse é o modal</h1>
            <slot></slot>
        <slot name="footer"></slot>
      <!-- 
          Quando eu tenho mais de um slot eu posso renomear  
            <div class="navbar">
                <slot name="cabecalho"></slot>
            </div>
            <section>
                mensagem que fica no meio
            </section>
            <div class="conteudo">
                <slot name="container"></slot>
            </div>


            E para usa o slot basta utilizar
                <template v-slot:cabecalho></template>
      -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>