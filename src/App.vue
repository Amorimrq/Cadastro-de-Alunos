<template>
  <div id="app" >
    <nav class="rotas-container">
      <router-link to="/" class="rotas">Cadastro</router-link>
      <span class="rotas-sep">|</span>
      <router-link to="/relatorio" class="rotas">Relatorio</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>

</script>
