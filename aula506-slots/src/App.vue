<template>
  <div id="app">
   
    <ModalPrincipal>
        <p>O teste</p>
          <template v-slot:top>Aqui vai ficar a mensagem do top</template>
          <template #footer>Aqui vai ficar a mensagem do fundo</template>
    </ModalPrincipal>

  </div>
</template>

<script>

import ModalPrincipal from "./components/ModalPrincipal";

export default {
  name: 'App', 
  components:{
    ModalPrincipal,
  }
}
</script>

<style>

</style>
